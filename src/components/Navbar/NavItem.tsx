import { NavLink } from "react-router-dom";

type Props = {
  label: string;
  url: string;
};

export const NavItem = ({ label, url }: Props) => {
  return (
    <li className={`block`}>
      <NavLink
        to={url}
        className={({ isActive, isPending }) => {
          const baseClasses =
            "w-full h-10 flex items-center px-6 border-brownish-4 border rounded-md uppercase text-sm/[1.33] font-primary tracking-[0.07em] hover:bg-brownish-1";
          if (isActive || isPending) {
            return `${baseClasses} bg-brownish-1 text-gray-6 font-semibold`;
          }
          return `${baseClasses} bg-gray-2 text-gray-4 font-medium`;
        }}
      >
        {label}
      </NavLink>
    </li>
  );
};
