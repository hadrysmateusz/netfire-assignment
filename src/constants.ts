export const NEW_CUSTOMER_DISCOUNT_CODE = "WELCOME15";
export const NEW_CUSTOMER_DISCOUNT_PERCDENT = 15;

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
