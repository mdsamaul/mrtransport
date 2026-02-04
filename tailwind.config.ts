import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-blue": "#0B2B52",
        "brand-red": "#E53935",
        "brand-light": "#F5F7FB",
      },
      fontFamily: {
        body: ["var(--font-body)", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 48px -32px rgba(15, 23, 42, 0.6)",
      },
    },
  },
  plugins: [],
} satisfies Config;
