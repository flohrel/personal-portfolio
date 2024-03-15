import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Josefin Sans Variable", ...defaultTheme.fontFamily.sans],
        slab: ["Josefin Slab Variable", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        mint: "#d7ffff",
        mintHover: "#7fecec",
      },
      backgroundColor: {
        frame: "#0d090f",
        primary: "#100E14",
      },
      backgroundImage: {
        overlay:
          "linear-gradient(-45deg, rgba(130, 0, 100, .07) 0%, rgba(30, 190, 180, .07) 90%)",
      },
      borderColor: {
        mint: "#d7ffff",
      },
    },
  },
  plugins: [],
};
