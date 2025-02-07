// const { col } = require("framer-motion/client");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        romanticPink: "#FCC6FF",
        romanticPeach: "#FFE6C9",
        orangee: "#FFE6C9",
        anotherPink: "#FFA09B",
        // #4635B1
        // #B771E5
        // #AEEA94
        // #FFFBCA

        mov: "#4635B1",
        roz: "#B771E5",
        verde: "#AEEA94",
        galben: "#FFFBCA",

        // #1D1616
        // #8E1616
        // #D84040
        // #EEEEEE

        dark: "#1D1616",
        red: "#8E1616",
        lightRed: "#D84040",
        white: "#EEEEEE",
      },
      fontFamily: {
        romantic: ["Dancing Script", "cursive"],
      },
    },
  },
  plugins: [],
};
