export const variants = {
  nav: "bg-gray-2 text-brownish-6 border-brownish-4 border rounded-full flex justify-center items-center h-[43px] aspect-square",
  "play-pause":
    "bg-gray-5 text-accent-green min-w-12 w-12 aspect-square rounded-full flex justify-center items-center border border-brownish-3",
};

export type Variant = keyof typeof variants;
