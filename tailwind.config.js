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
          50: "#F2F2F2",
          100: "#E6E6E6",
          200: "#BFBFBF",
          300: "#999999",
          400: "#4D4D4D",
          500: "#000000",
          600: "#000000",
          700: "#000000",
          800: "#000000",
          900: "#000000",
          950: "#000000",
        },
      },
    },
  },
  plugins: [],
};
