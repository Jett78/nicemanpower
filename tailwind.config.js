/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enable dark mode using a class
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F5FCFF",
          100: "#EBF8FF",
          200: "#CCEAFC",
          300: "#AFD9FA",
          400: "#74B4F7",
          500: "#3B82F6",
          600: "#306FDB",
          700: "#2153B8",
          800: "#153B94",
          900: "#0C286E",
          950: "#051647",
        },
        secondary: {
          50: "#F2FAFA",
          100: "#E6F7F7",
          200: "#C5EBEB",
          300: "#A4DEDE",
          400: "#6AC4C4",
          500: "#3AAAAA",
          600: "#2F9499",
          700: "#207380",
          800: "#145666",
          900: "#0B3A4D",
          950: "#052130",
        },

        tertiary: {
          50: "#FFFFFF",
          100: "#F2F2F2",
          200: "#E6E6E6",
          300: "#D9D9D9",
          400: "#B3B3B3",
          500: "#8C8C8C",
          600: "#666666",
          700: "#404040",
          800: "#1A1A1A",
          900: "#0D0D0D",
          950: "#000000",
        },
      },
    },
  },
  plugins: [],
};
