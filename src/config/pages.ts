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
