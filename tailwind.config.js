/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fly: {
          "0%": { transform: "translateX(-20vw) scaleX(1)" },
          "49%": { transform: "translateX(100vw) scaleX(1)" },
          "51%": { transform: "translateX(100vw) scaleX(-1)" },
          "100%": { transform: "translateX(-20vw) scaleX(-1)" },
        },
        fly2: {
          "0%": { transform: "translateX(-70vw) scaleX(1)" },
          "49%": { transform: "translateX(100vw) scaleX(1)" },
          "51%": { transform: "translateX(100vw) scaleX(-1)" },
          "100%": { transform: "translateX(-70vw) scaleX(-1)" },
        }
      },
      animation: {
        fly: "fly 30s linear infinite ",
        fly2: "fly2 15s linear infinite ",
      },
      colors: {
        n: {
          1: "#FFFFFF",
          2: "#CAC6DD",
          3: "#ADA8C3",
          4: "#757185",
          5: "#3F3A52",
          6: "#252134",
          7: "#15131D",
          8: "#0E0C15",
          9: "#474060",
          10: "#43435C",
          11: "#1B1B2E",
          12: "#2E2A41",
          13: "#6C7275",
        },
      },
      fontFamily: {
        title: "var(--font-title)",
        text: "var(--font-text)",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      spacing: {
        0.25: "0.0625rem",
        7.5: "1.875rem",
        15: "3.75rem",
      },
      transitionTimingFunction: {
        DEFAULT: "linear",
      },
      borderWidth: {
        DEFAULT: "0.0625rem",
      },
      boxShadow: {
        "2xlCustom": "0 25px 50px -12px rgb(192 0 255 / 75%)",
        container: "3px 3px 8px rgb(84 57 93)",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        ".h1": {
          "@apply font-semibold font-title text-[3.5rem] leading-[4.25rem] md:text-[3.75rem] md:leading-[4.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]":
            {},
        },
        ".h2": {
          "@apply text-[2.75rem] font-title leading-[3.5rem] md:text-[3rem] md:leading-[3.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight":
            {},
        },
        ".h2Big": {
          "@apply font-semibold font-title text-gray-400 text-[7vw] leading-[11vw] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[2.5rem] xl:text-[2.90rem] 2xl:text-[3.5rem]":
            {},
        },
        ".body-1": {
          "@apply font-text text-[1.87rem] leading-[2.5rem] md:text-[1.75rem] md:leading-[2.5rem] lg:text-[1.25rem] lg:leading-8":
            {},
        },
        ".body-2": {
          "@apply font-text text-n-2 text-[1.75rem] leading-[2.5rem] md:text-[2.25rem] lg:text-[1.75rem] lg:leading-8":
            {},
        },
        ".hobby": {
          "@apply sm:border-l border-n-5 sm:mx-10 mt-10 pt-5": {},
        },
        ".form": {
          "@apply body-2 mt-5 bg-transparent border border-n-5 p-2": {},
        },
      });
      addUtilities({});
    }),
  ],
};
