import { ICON_IDS } from "../Icon";
import { IconButton } from "../IconButton";

type Props = {
  playPauseVideo: () => void;
  isVideoPlaying: boolean;
};

export const PlayPauseButton = ({ playPauseVideo, isVideoPlaying }: Props) => {
  return (
    <IconButton
      icon={isVideoPlaying ? ICON_IDS.mediaPause : ICON_IDS.mediaPlay}
      aria-label={isVideoPlaying ? "Pause Video" : "Play Video"}
      onClick={playPauseVideo}
      variant="play-pause"
    />
  );
};
