import { PlayPauseButton } from "./PlayPauseButton";
import { ProgressBar } from "./ProgressBar";
import { PlaybackTimeDisplay } from "./PlaybackTimeDisplay";
import { useVideoControls } from "./useVideoControls";

type Props = Pick<
  ReturnType<typeof useVideoControls>,
  "getPlayPauseButtonProps" | "getProgressBarProps" | "playbackTimeDisplayRef"
>;

/**
 * Custom controls var for a video element.
 */
export const VideoControlsBar = ({
  getPlayPauseButtonProps,
  getProgressBarProps,
  playbackTimeDisplayRef,
}: Props) => {
  return (
    <div className="pt-[21px] pb-6 pl-[33px] pr-[36px] bg-gray-7 bg-opacity-30 border border-white border-opacity-20 flex items-center gap-[30px] rounded-[10px]">
      <PlayPauseButton {...getPlayPauseButtonProps()} />
      <ProgressBar {...getProgressBarProps()} />
      <PlaybackTimeDisplay ref={playbackTimeDisplayRef} />
    </div>
  );
};
