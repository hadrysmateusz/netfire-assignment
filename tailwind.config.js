/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: ({ theme }) => ({
        "main-gradient-1": `linear-gradient(to right, ${theme("gradientColorStops.main-gradient-stop-1")} 0%, ${theme("gradientColorStops.main-gradient-stop-3")} 50.5%, ${theme("gradientColorStops.main-gradient-stop-4")} 100%)`,
        "main-gradient-2": `linear-gradient(to right, ${theme("gradientColorStops.main-gradient-stop-2")} 11%, ${theme("gradientColorStops.main-gradient-stop-3")} 50.5%, ${theme("gradientColorStops.main-gradient-stop-4")} 100%)`,
        "main-gradient-3": `linear-gradient(to right, ${theme("gradientColorStops.main-gradient-stop-2")} 3%, ${theme("gradientColorStops.main-gradient-stop-3")} 41%, ${theme("gradientColorStops.main-gradient-stop-4")} 65%)`,
      }),
      gradientColorStops: ({ theme }) => ({
        "main-gradient-stop-1": theme("colors.accent.green"),
        "main-gradient-stop-2": "#BEE035",
        "main-gradient-stop-3": "#844071",
        "main-gradient-stop-4": theme("colors.accent.blue"),
        "main-gradient-stop-5": "#04C2C9",
        "main-gradient-stop-6": "#E04133",
      }),
      spacing: {
        "page-container": "1337px",
      },
    },
    fontFamily: {
      primary: "Exo, sans-serif",
      secondary: "Inter, sans-serif",
    },
    fontSize: {
      "2xs": "0.6875rem",
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "2rem",
      "4xl": "2.8125rem",
    },
    colors: {
      transparent: "transparent",
      white: "#FFFFFF",
      black: "#000000",
      accent: {
        blue: "#404F84",
        green: "#CAEA71",
      },
      gray: {
        1: "#ECECEC",
        2: "#D9D9D9",
        3: "#252525",
        4: "#1C1B1B",
        5: "#101215",
        6: "#111010",
        7: "#030202",
      },
      brownish: {
        1: "#E5E5DF",
        2: "#C9C4C1",
        3: "#888D8E",
        4: "#827D7D",
        5: "#5F5959",
        6: "#443B3B",
        7: "#41423E",
      },
      "video-placeholder": "#decda8",
    },
  },
  plugins: [],
};
