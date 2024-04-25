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
        content: "#100e14",
      },
      backgroundImage: {
        overlay:
          "linear-gradient(-45deg, rgba(130, 0, 100, 0.07) 0%, rgba(30, 190, 180, 0.07) 90%)",
      },
      borderColor: {
        mint: "#d7ffff",
      },
      boxShadow: {
        'sidebar': "3px 0px 6px 0px rgba(0,0,0,0.16),3px 0px 6px 0px rgba(0,0,0,0.23)",
        'sidebar-with-neon': "3px 0px 6px 0px rgba(0,0,0,0.16),3px 0px 6px 0px rgba(0,0,0,0.23), inset 16px 16px 8px -16px rgb(215 255 255 / 0.1), inset 16px -16px 8px -16px rgb(215 255 255 / 0.1)",
        'frame-neon': "inset 0px 0px 10px 0px rgba(215,255,255,0.16),inset 0px 0px 10px 0px rgba(215,255,255,0.23)",
        'multi': "rgba(215, 255, 255, 0.4) 5px 0px, rgba(215, 255, 255, 0.3) 10px 0px, rgba(215, 255, 255, 0.2) 15px 0px, rgba(215, 255, 255, 0.1) 20px 0px, rgba(215, 255, 255, 0.05) 25px 0px",
        'ultra-neon': "rgba(215, 255, 255, 0.09) 2px 0px 1px, rgba(215, 255, 255, 0.09) 4px 0px 2px, rgba(215, 255, 255, 0.09) 8px 0px 4px, rgba(215, 255, 255, 0.09) 16px 0px 8px, rgba(215, 255, 255, 0.09) 32px 0px 16px"
      }
    },
  },
  plugins: [],
};