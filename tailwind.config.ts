import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: "#FFD700",
          black: "#0F0F0F",
          offwhite: "#FAFAF8",
          warm: "#171717",
          ink: "#24211C",
          graphite: "#4A4640",
          clay: "#D8D0C2",
          paper: "#F2EEE6"
        }
      },
      fontFamily: {
        display: ["var(--font-poppins)", "sans-serif"],
        sans: ["var(--font-poppins)", "sans-serif"]
      },
      boxShadow: {
        editorial: "0 28px 80px rgba(15, 15, 15, 0.16)",
        line: "inset 0 0 0 1px rgba(15, 15, 15, 0.08)"
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)"
      }
    }
  },
  plugins: []
};

export default config;
