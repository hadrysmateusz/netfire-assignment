import { Icon, IconId } from "../Icon";

type Props = { icon: IconId; className?: string };

export const IconButton = ({ icon, className = "" }: Props) => {
  return (
    <button
      className={
        "bg-gray-2 text-brownish-6 border-brownish-4 border rounded-full flex justify-center items-center h-[43px] aspect-square" +
        " " +
        className
      }
    >
      <Icon icon={icon} />
    </button>
  );
};
