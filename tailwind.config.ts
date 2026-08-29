import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-yellow": "#E8A317",
        brand: {
          ink: "#1C1914",
          copper: "#C45C26",
          amber: "#E8A317",
          cream: "#F6F0E6",
          soot: "#3A342C",
          paper: "#FFFCF7",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Teko", "sans-serif"],
        sans: ["var(--font-body)", "Source Sans 3", "sans-serif"],
        hindi: ["var(--font-hindi)", "Noto Sans Devanagari", "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.65" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        pulseSoft: "pulseSoft 2.4s ease-in-out infinite",
      },
    },
  },  
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("daisyui")],
};
export default config;
