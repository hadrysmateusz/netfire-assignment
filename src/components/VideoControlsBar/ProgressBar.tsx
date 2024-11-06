type Props = {
  progressBarRef: React.RefObject<HTMLDivElement>;
  scrub: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  startScrubbing: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

export const ProgressBar = ({ progressBarRef, scrub, startScrubbing }: Props) => {
  return (
    <div className="w-full py-3 cursor-pointer" onMouseMove={scrub} onMouseDown={startScrubbing}>
      <div className="h-[10px] bg-gray-3 w-full rounded-full overflow-hidden">
        <div
          ref={progressBarRef}
          className="h-[10px] bg-accent-green pointer-events-none origin-left"
        />
      </div>
    </div>
  );
};
