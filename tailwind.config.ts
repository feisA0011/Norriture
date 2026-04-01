import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0908",
        surface: "#161210",
        surfaceSoft: "#1D1714",
        text: "#F3EEE8",
        muted: "#B7A99A",
        accent: "#D2B48C"
      },
      boxShadow: {
        luxury: "0 20px 60px rgba(0,0,0,0.4)"
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at 15% 20%, rgba(210,180,140,0.22), transparent 40%), radial-gradient(circle at 85% 0%, rgba(255,220,175,0.15), transparent 30%)"
      }
    }
  },
  plugins: []
};

export default config;
