import { CDN_DOMAIN, HERO_VIDEO_PATH } from "../../config/constants";
import { SectionBadge } from "../SectionBadge";
import { useVideoControls, VideoControlsBar } from "../VideoControlsBar";

export const Hero = () => {
  const { getVideoProps, ...controlsBarProps } = useVideoControls();

  return (
    <section className="w-full h-[909px] overflow-hidden relative flex justify-center items-center font-primary">
      <video
        autoPlay
        disablePictureInPicture
        loop
        muted
        className="w-full h-full absolute object-cover -z-20 bg-video-placeholder"
        src={CDN_DOMAIN + HERO_VIDEO_PATH}
        {...getVideoProps()}
      >
        Your browser does not support video playback.
      </video>

      <div className="w-full h-full absolute -z-10 bg-black bg-opacity-40" />

      <div className="page-container mt-[150px]">
        <SectionBadge size="sm" textColorClass="text-white">
          Lorem ipsum
        </SectionBadge>
        <h1 className="font-semibold text-4xl/[1.26em] color-white max-w-[730px] text-white mt-[38px] mb-14 tracking-tighter">
          <span className="bg-main-gradient-2 bg-clip-text text-transparent">
            Lorem Ipsum Dolor Sit amet
          </span>
          <br /> Donec cursus ligula diam, nec congue augue ultrices nec.
        </h1>
        <VideoControlsBar {...controlsBarProps} />
      </div>
    </section>
  );
};
