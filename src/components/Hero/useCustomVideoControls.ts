import { useEffect, useRef, useState } from "react";
import { getFormattedTimeDisplay } from "./getFormattedTimeDisplay";
import { getPercentage } from "../../utils/getPercentage";

/**
 * A custom hook that manages custom controls for a video element.
 *
 * Refs are used instead of state to avoid unnecessary re-renders, considering the large frequency of updates.
 */
export const useCustomVideoControls = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const timerRef = useRef<HTMLDivElement>(null);
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
    progressBar.style.transform = `scaleX(${progress}%)`;
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
      video.play();
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
    const timer = timerRef.current;
    if (!timer) return;

    timer.textContent = getFormattedTimeDisplay(video.currentTime);
  }

  /**
   * Sets the current time of the video based on the mouse position.
   *
   * @param event A react mouse event used to calculate the scrub time
   */
  function scrub(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime =
      (event.nativeEvent.offsetX / event.currentTarget.offsetWidth) * video.duration;

    updateProgressBar();
  }

  /**
   * Initiates scrubbing by pausing the video and setting the scrubbing state.
   */
  function startScrubbing() {
    const video = videoRef.current;
    if (!video) return;

    scrubbingRef.current = { isScrubbing: true, wasPlaying: !video.paused };
    video.pause();
  }

  /**
   * @returns An object containing props for the `<video>` element.
   */
  const getVideoProps = () => ({
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
    onContextMenu: (event: React.MouseEvent<HTMLVideoElement, MouseEvent>) => {
      event.preventDefault();
    },
    onTimeUpdate: (event: React.SyntheticEvent<HTMLVideoElement, Event>) => {
      setTimeDisplay(event.currentTarget);
    },
  });

  /**
   * @returns An object containing props for the progress bar wrapper element. The progress bar wrapper is the full-width background of the progress bar.
   */
  const getProgressBarWrapperProps = () => ({
    onClick: scrub,
    onMouseDown: startScrubbing,
  });

  /**
   * @returns An object containing props for the progress bar extension element. The progress bar extension is an invisible part of the progress bar that extends above and below it.
   */
  const getProgressBarExtensionProps = () => ({
    // This event is handled on a separate, larger wrapper to reduce the precision required for scrubbing
    onMouseMove: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (!scrubbingRef.current.isScrubbing) return;
      scrub(event);
    },
  });

  // Resets the scrubbing state and restores playback state when the mouse is released anywhere on the page
  useEffect(() => {
    function handleMouseUp() {
      const wasPlaying = scrubbingRef.current.wasPlaying;

      scrubbingRef.current = { isScrubbing: false, wasPlaying: false };

      const video = videoRef.current;
      if (!video) return;

      if (wasPlaying) {
        video.play();
      }
    }

    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  useEffect(() => {
    return () => {
      stopUpdatingProgressBar();
    };
  }, []);

  return {
    videoRef,
    timerRef,
    progressBarRef,
    isVideoPlaying,
    getVideoProps,
    playPauseVideo,
    getProgressBarWrapperProps,
    getProgressBarExtensionProps,
  };
};
