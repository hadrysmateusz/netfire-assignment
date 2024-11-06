import { Icon, IconId } from "../Icon";
import { Variant, variants } from "./variants";

type Props = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "className"
> & {
  icon: IconId;
  variant: Variant;
  fontSizeClassName?: string;
};

export const IconButton = ({ icon, variant, fontSizeClassName, ...buttonProps }: Props) => {
  const className = variants[variant];

  return (
    <button className={className + ` ${fontSizeClassName}`} {...buttonProps}>
      <Icon icon={icon} />
    </button>
  );
};
