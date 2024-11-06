import { Icon } from "../Icon";
import { useCustomVideoControls } from "./useCustomVideoControls";

type Props = Omit<ReturnType<typeof useCustomVideoControls>, "videoRef" | "getVideoProps">;

/**
 * Custom controls var for a video element.
 */
export const VideoControlsBar = ({
  playPauseVideo,
  getProgressBarWrapperProps,
  getProgressBarExtensionProps,
  isVideoPlaying,
  progressBarRef,
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

      <div className="w-full py-4" {...getProgressBarExtensionProps()}>
        <div
          className="h-[10px] bg-gray-3 w-full rounded-full overflow-hidden cursor-pointer"
          {...getProgressBarWrapperProps()}
        >
          <div
            ref={progressBarRef}
            className="h-[10px] bg-accent-green pointer-events-none origin-left"
          />
        </div>
      </div>

      <div ref={timerRef} className="font-bold text-brownish-2 w-12 min-w-12 text-left">
        00:00
      </div>
    </div>
  );
};
