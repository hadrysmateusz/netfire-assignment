export const ICON_IDS = {
  cart: "cart",
  search: "search",
  user: "user",
  mediaPlay: "media-play",
  mediaPause: "media-pause",
} as const;
export type IconId = (typeof ICON_IDS)[keyof typeof ICON_IDS];
