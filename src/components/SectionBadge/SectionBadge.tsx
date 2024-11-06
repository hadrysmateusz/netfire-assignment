import { ReactNode } from "react";

const sizeClasses = {
  sm: "h-11",
  md: "h-[53px]",
};

type Props = {
  children: ReactNode;
  size: "sm" | "md";
  textColorClass?: string;
};

export const SectionBadge = ({ children, size, textColorClass: textColor = "" }: Props) => {
  return (
    <div
      className={`${sizeClasses[size]} ${textColor} uppercase rounded-[14px] border border-brownish-6 bg-gray-2 bg-opacity-[19%] w-max px-[22px] flex items-center text-xs tracking-[0.07em] font-medium`}
    >
      {children}
    </div>
  );
};
