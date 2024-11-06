import { useEffect, useRef, useState } from "react";
import { getFormattedTimeDisplay } from "./getFormattedTimeDisplay";
import { getPercentage } from "../../utils/getPercentage";

/**
 * A hook that manages custom controls for a video element.
 *
 * Use th
 *
 * Refs are used instead of state to avoid unnecessary re-renders, considering the large frequency of updates.
 */
export const useVideoControls = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playbackTimeDisplayRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const scrubbingRef = useRef({ isScrubbing: false, wasPlaying: false });
  const animationFrameIdRef = useRef<number | null>(null);

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  /**
   * Updates the progress bar based on the current time of the video.
   */
  const updateProgressBar = () => {
    const video = videoRef.current;
    const progressBar = progressBarRef.current;
    if (!video || !progressBar) return;

    const progress = getPercentage(video.currentTime, video.duration);
    progressBar.style.transform = `scaleX(${progress.toString()}%)`;
  };

  /**
   * A recursive animation frame function that updates the progress bar based on the current time of the video.
   *
   * `requestAnimationFrame` is used to ensure the progress bar is updated smoothly.
   */
  const stepProgressBarUpdate = () => {
    updateProgressBar();
    animationFrameIdRef.current = requestAnimationFrame(stepProgressBarUpdate);
  };

  /**
   * Starts the progress bar updater animation.
   */
  const startUpdatingProgressBar = () => {
    const animationFrameId = animationFrameIdRef.current;
    if (animationFrameId !== null) return;

    stepProgressBarUpdate();
  };

  /**
   * Stops the progress bar updater animation.
   */
  const stopUpdatingProgressBar = () => {
    const animationFrameId = animationFrameIdRef.current;
    if (animationFrameId === null) return;

    cancelAnimationFrame(animationFrameId);
    animationFrameIdRef.current = null;
  };

  /**
   * Plays or pauses the video based on its current state.
   */
  function playPauseVideo() {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused || video.ended) {
      void video.play();
    } else {
      video.pause();
    }
  }

  /**
   * Sets the text-based time display based on the current time of the video.
   *
   * @param video The video element to get the current time from
   * @returns The formatted time display in the format "mm:ss"
   */
  function setTimeDisplay(video: HTMLVideoElement) {
    const playbackTimeDisplay = playbackTimeDisplayRef.current;
    if (!playbackTimeDisplay) return;

    playbackTimeDisplay.textContent = getFormattedTimeDisplay(video.currentTime);
  }

  /**
   * Sets the current time of the video based on the mouse position.
   *
   * @param event A react mouse event used to calculate the new playback position
   */
  function setPlaybackPosition(event: React.MouseEvent<HTMLDivElement>) {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime =
      (event.nativeEvent.offsetX / event.currentTarget.offsetWidth) * video.duration;

    updateProgressBar();
  }

  /**
   * Initiates scrubbing by pausing the video and setting the scrubbing state.
   */
  function startScrubbing(event: React.MouseEvent<HTMLDivElement>) {
    const video = videoRef.current;
    if (!video) return;

    scrubbingRef.current = { isScrubbing: true, wasPlaying: !video.paused };
    video.pause();
    setPlaybackPosition(event);
  }

  /**
   * Stops scrubbing and restores playback state.
   */
  function stopScrubbing() {
    const wasPlaying = scrubbingRef.current.wasPlaying;

    scrubbingRef.current = { isScrubbing: false, wasPlaying: false };

    const video = videoRef.current;
    if (!video) return;

    if (wasPlaying) {
      void video.play();
    }
  }

  /**
   * Scrubs the video based on the mouse position.
   *
   * @param event A react mouse event used to calculate the new playback position
   */
  function scrub(event: React.MouseEvent<HTMLDivElement>) {
    if (!scrubbingRef.current.isScrubbing) return;
    setPlaybackPosition(event);
  }

  /**
   * @returns An object containing props for the `<video>` element.
   */
  const getVideoProps = () => ({
    ref: videoRef,
    onPlay: () => {
      setIsVideoPlaying(true);
      startUpdatingProgressBar();
    },
    onPause: () => {
      setIsVideoPlaying(false);
      stopUpdatingProgressBar();
    },
    onEnded: () => {
      setIsVideoPlaying(false);
      stopUpdatingProgressBar();
    },
    // This prevents changing video state and settings via right-clicking
    onContextMenu: (event: React.MouseEvent<HTMLVideoElement>) => {
      event.preventDefault();
    },
    onTimeUpdate: (event: React.SyntheticEvent<HTMLVideoElement>) => {
      setTimeDisplay(event.currentTarget);
    },
  });

  /**
   * @returns An object containing props for the progress bar component.
   */
  const getProgressBarProps = () => ({
    progressBarRef,
    scrub,
    startScrubbing,
  });

  /**
   * @returns An object containing props for the play/pause button component.
   */
  const getPlayPauseButtonProps = () => ({
    playPauseVideo,
    isVideoPlaying,
  });

  // Resets the scrubbing state and restores playback state when the mouse is released anywhere on the page
  useEffect(() => {
    window.addEventListener("mouseup", stopScrubbing);
    return () => {
      window.removeEventListener("mouseup", stopScrubbing);
    };
  }, []);

  // Cleanup to stop the progress bar updater animation when the component is unmounted
  useEffect(() => {
    return () => {
      stopUpdatingProgressBar();
    };
  }, []);

  return {
    playbackTimeDisplayRef,
    playPauseVideo,
    getVideoProps,
    getProgressBarProps,
    getPlayPauseButtonProps,
  };
};
