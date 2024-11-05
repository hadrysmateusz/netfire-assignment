/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "2xs": "0.6875rem",
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2.8125rem",
      },
      colors: {
        white: "#FFFFFF",
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
        },
        brownish: {
          1: "#E5E5DF",
          2: "#C9C4C1",
          3: "#888D8E",
          4: "#5F5959",
          5: "#443B3B",
          6: "#41423E",
        },
        "semi-transparent-black": "#0302024D",
      },
    },
  },
  plugins: [],
};
