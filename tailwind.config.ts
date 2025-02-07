import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        romanticPink: "#ff9a9e",
        romanticPeach: "#fad0c4",
        deepRose: "#d63384",
        softWhite: "#fff7f8",
      },
      fontFamily: {
        romantic: ["Dancing Script", "cursive"],
      },
    },
  },
  plugins: [],
} satisfies Config;


