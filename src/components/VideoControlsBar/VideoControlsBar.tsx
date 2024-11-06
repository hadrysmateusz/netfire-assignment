import { Icon } from "../Icon";
import { ProgressBar } from "./ProgressBar";
import { useVideoControls } from "./useVideoControls";

type Props = Omit<ReturnType<typeof useVideoControls>, "videoRef" | "getVideoProps">;

/**
 * Custom controls var for a video element.
 */
export const VideoControlsBar = ({
  playPauseVideo,
  getProgressBarProps,
  isVideoPlaying,
  timerRef,
}: Props) => {
  return (
    <div className="pt-[21px] pb-6 pl-[33px] pr-[36px] bg-gray-7 bg-opacity-30 border border-white border-opacity-20 flex items-center gap-[30px] rounded-[10px]">
      <button
        onClick={playPauseVideo}
        className="bg-gray-5 text-accent-green min-w-12 w-12 aspect-square rounded-full flex justify-center items-center border border-brownish-3"
      >
        <Icon icon={isVideoPlaying ? "media-pause" : "media-play"}></Icon>
      </button>

      <ProgressBar {...getProgressBarProps()} />

      <div ref={timerRef} className="font-bold text-brownish-2 w-12 min-w-12 text-left">
        00:00
      </div>
    </div>
  );
};
