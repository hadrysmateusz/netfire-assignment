import { MdOutlineShoppingCartCheckout, MdPerson } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import PlayIcon from "../../assets/play-button-icon.svg?react";
import PauseIcon from "../../assets/pause-button-icon.svg?react";
import { IconId } from "./types";

export const Icon = ({ icon }: { icon: IconId }) => {
  switch (icon) {
    case "cart":
      return <MdOutlineShoppingCartCheckout />;
    case "search":
      return <IoMdSearch />;
    case "user":
      return <MdPerson />;
    case "media-play":
      return <PlayIcon />;
    case "media-pause":
      return <PauseIcon />;
  }
};
