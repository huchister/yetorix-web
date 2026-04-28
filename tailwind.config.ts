import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#1F2227",
        "deep-teal": "#1E6B77",
        "electric-violet": "#7B61E4",
        "warm-coral": "#FF6B4A",
        "off-white": "#FEFEF8",
      },
      fontFamily: {
        sora: ["var(--font-sora)", "system-ui", "sans-serif"],
        jakarta: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
