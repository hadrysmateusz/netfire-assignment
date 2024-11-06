import { Link } from "react-router-dom";

type Props = {
  label: string;
  url: string;
  isActive?: boolean;
};

export const NavItem = ({ label, url, isActive = false }: Props) => {
  return (
    <li
      className={`${isActive ? "bg-brownish-1 text-gray-6 font-semibold" : "bg-gray-2 text-gray-4 font-medium"} border-brownish-4 border rounded-md uppercase text-sm/[1.33] h-10 block font-primary tracking-[0.07em]`}
    >
      <Link to={url} className="w-full h-full flex items-center px-6">
        {label}
      </Link>
    </li>
  );
};
