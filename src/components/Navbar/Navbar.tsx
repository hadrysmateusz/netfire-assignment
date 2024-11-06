import { Link } from "react-router-dom";
import { LOCAL_URLS, PAGES } from "../../config";
import { BRAND_NAME } from "../../config/constants";
import { IconButton } from "../IconButton";
import { NavItem } from "./NavItem";
import brandNameLogo from "/brand-name-logo.svg";
import { ICON_IDS } from "../Icon";

export const Navbar = () => {
  return (
    <header className="flex justify-center h-[101px] border-b-brownish-4 border-b">
      <div className="page-container grid grid-cols-[1fr_max-content_1fr] items-center">
        <nav>
          <ul className="flex gap-[15px]">
            <NavItem label="Home" url={LOCAL_URLS[PAGES.home]} />
            <NavItem label="About" url={LOCAL_URLS[PAGES.about]} />
            <NavItem label="Products" url={LOCAL_URLS[PAGES.products]} />
          </ul>
        </nav>
        <Link to={LOCAL_URLS[PAGES.home]}>
          <img src={brandNameLogo} width={49} height={54} alt={`${BRAND_NAME} logo`} />
        </Link>
        <div>
          <div className="flex gap-[20px] justify-end">
            <IconButton
              icon={ICON_IDS.cart}
              aria-label="Cart"
              variant="nav"
              fontSizeClassName="text-[23px]"
            />
            <IconButton
              icon={ICON_IDS.user}
              aria-label="Your Account"
              variant="nav"
              fontSizeClassName="text-[28px]"
            />
            <IconButton
              icon={ICON_IDS.search}
              aria-label="Search"
              variant="nav"
              fontSizeClassName="text-[25px]"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
