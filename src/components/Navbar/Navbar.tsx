import { BRAND_NAME, LOCAL_URLS, PAGES } from "../../constants";
import { IconButton } from "../IconButton";
import { NavItem } from "./NavItem";
import brandNameLogo from "/brand-name-logo.svg";

export const Navbar = () => {
  // TODO: control isActive state based on url
  return (
    <header className="flex justify-center h-[101px] border-b-brownish-4 border-b">
      <div className="w-page-container grid grid-cols-[1fr_max-content_1fr] items-center">
        <nav>
          <ul className="flex gap-[15px]">
            <NavItem label="Home" url={LOCAL_URLS[PAGES.home]} isActive />
            <NavItem label="About" url={LOCAL_URLS[PAGES.about]} />
            <NavItem label="Products" url={LOCAL_URLS[PAGES.products]} />
          </ul>
        </nav>
        <img src={brandNameLogo} alt={`${BRAND_NAME} logo`} />
        <div>
          <ul className="flex gap-[20px] justify-end">
            <IconButton icon="cart" variant="nav" fontSizeClassName="text-[23px]" />
            <IconButton icon="user" variant="nav" fontSizeClassName="text-[28px]" />
            <IconButton icon="search" variant="nav" fontSizeClassName="text-[25px]" />
          </ul>
        </div>
      </div>
    </header>
  );
};
