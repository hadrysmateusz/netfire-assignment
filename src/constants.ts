export const NEW_CUSTOMER_DISCOUNT_CODE = "WELCOME15";
export const NEW_CUSTOMER_DISCOUNT_PERCDENT = 15;
export const CDN_DOMAIN = "https://d1phdajg7uva16.cloudfront.net";
export const HERO_VIDEO_PATH = "/9206132-hd_1920_1080_25fps.mp4";

export const PAGES = {
  home: "home",
  products: "products",
  about: "about",
} as const;

export const LOCAL_URLS = {
  [PAGES.home]: "/",
  [PAGES.products]: "/products",
  [PAGES.about]: "/about",
} satisfies Record<keyof typeof PAGES, string>;
