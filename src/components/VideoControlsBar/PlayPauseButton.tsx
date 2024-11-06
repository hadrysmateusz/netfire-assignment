import { IconButton } from "../IconButton";

type Props = {
  playPauseVideo: () => void;
  isVideoPlaying: boolean;
};

export const PlayPauseButton = ({ playPauseVideo, isVideoPlaying }: Props) => {
  return (
    <IconButton
      icon={isVideoPlaying ? "media-pause" : "media-play"}
      onClick={playPauseVideo}
      variant="play-pause"
    />
  );
};
