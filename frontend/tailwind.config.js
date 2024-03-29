/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        flash: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "0.6" },
        },
      },
      animation: {
        flash: "flash 0.5s ease-in-out 1",
      },
      boxShadow: {
        custom: "0 15px 40px -15px",
      },
      colors: {
        light: {
          50: "#f7f7f3",
          100: "#e7e7d8",
          DEFAULT: "#e7e7d8",
          200: "#d2d2b5",
          300: "#bab98f",
          400: "#aaa675",
          500: "#9d9363",
          600: "#8a7c55",
          700: "#746549",
          800: "#605240",
          900: "#504537",
          950: "#2c251c",
        },
        dark: {
          50: "#f6f6f5",
          100: "#e7e7e6",
          200: "#d1d1d0",
          300: "#b2b2ae",
          400: "#8a8986",
          500: "#6f6e6b",
          600: "#5f5f5b",
          700: "#504f4e",
          800: "#464544",
          900: "#3d3d3c",
          DEFAULT: "#3d3d3c",
          950: "#1e1e1d",
        },
        primary: {
          50: "#fef5ee",
          100: "#fce9d8",
          200: "#f9cfaf",
          300: "#f5ac7c",
          400: "#f08047",
          500: "#ec642b",
          DEFAULT: "#ec642b",
          600: "#dd4619",
          700: "#b73417",
          800: "#922a1a",
          900: "#762518",
          950: "#3f100b",
        },
      },
    },
  },
  plugins: [],
};
