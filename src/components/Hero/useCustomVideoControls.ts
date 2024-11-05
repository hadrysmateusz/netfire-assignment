import { useEffect, useRef, useState } from "react";
import { getFormattedTimeDisplay } from "./getFormattedTimeDisplay";
import { getPercentage } from "../../utils/getPercentage";

export const useCustomVideoControls = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const timerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const scrubbing = useRef({ isScrubbing: false, wasPlaying: false });

  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

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
   * @returns The formatted time display in the format "mm:ss"
   */
  function setTimeDisplay(video: HTMLVideoElement) {
    const timer = timerRef.current;
    if (!timer) return;

    timer.textContent = getFormattedTimeDisplay(video.currentTime);
  }

  /**
   * Sets the progress bar width based on the current time of the video.
   */
  function setProgressBar(video: HTMLVideoElement) {
    const progressBar = progressBarRef.current;
    if (!progressBar) return;

    progressBar.style.width = `${getPercentage(video.currentTime, video.duration)}%`;
  }

  /**
   * Sets the current time of the video based on the mouse position.
   *
   * @param event A react mouse event used to calculate the scrub time
   */
  function scrub(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const video = videoRef.current;
    if (!video) return;

    const scrubTime =
      (event.nativeEvent.offsetX / event.currentTarget.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
  }

  /**
   * Initiates scrubbing by pausing the video and setting the scrubbing state.
   */
  function startScrubbing() {
    const video = videoRef.current;
    if (!video) return;

    scrubbing.current = { isScrubbing: true, wasPlaying: !video.paused };
    video.pause();
  }

  /**
   * @returns An object containing props for the `<video>` element.
   */
  const getVideoProps = () => ({
    onPlay: () => setIsVideoPlaying(true),
    onPause: () => setIsVideoPlaying(false),
    onEnded: () => setIsVideoPlaying(false),
    // This prevents changing video state and settings via right-clicking
    onContextMenu: (event: React.MouseEvent<HTMLVideoElement, MouseEvent>) => {
      event.preventDefault();
    },
    onTimeUpdate: (event: React.SyntheticEvent<HTMLVideoElement, Event>) => {
      setTimeDisplay(event.currentTarget);
      setProgressBar(event.currentTarget);
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
      if (!scrubbing.current.isScrubbing) return;
      scrub(event);
    },
  });

  // Resets the scrubbing state and restore playback state when the mouse is released anywhere on the page
  useEffect(() => {
    function handleMouseUp() {
      const wasPlaying = scrubbing.current.wasPlaying;

      scrubbing.current = { isScrubbing: false, wasPlaying: false };

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
