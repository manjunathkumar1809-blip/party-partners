import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: { DEFAULT: "#0B0C10", deep: "#121316" },
        gold: { DEFAULT: "#D4AF37", bright: "#F5C542", muted: "#C5A059" },
      },
    },
  },
  plugins: [],
};
export default config;
