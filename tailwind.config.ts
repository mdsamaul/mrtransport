import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "brand-blue": {
          DEFAULT: "#0B2B52",
          50: "#f0f6fe",
          100: "#dde9fb",
          200: "#c2daf7",
          300: "#99c4f1",
          400: "#6aa7e9",
          500: "#4686de",
          600: "#3169c4",
          700: "#2854a0",
          800: "#254782",
          900: "#0B2B52", // Primary
        },
        "brand-red": {
          DEFAULT: "#E53935",
          50: "#fef2f2",
          100: "#ffe1e1",
          200: "#ffc7c7",
          300: "#ffa0a0",
          400: "#ff6b6b",
          500: "#E53935", // Primary
          600: "#c61a1a",
          700: "#a61515",
        },
        "brand-light": "#F8FAFC",
        slate: {
          850: "#1e293b", // Custom dark slate
        }
      },
      fontFamily: {
        body: ["var(--font-body)", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 10px rgba(0, 0, 0, 0.03), 0 10px 25px rgba(0, 0, 0, 0.04)",
        card: "0 0 0 1px rgba(0,0,0,0.03), 0 2px 8px rgba(0,0,0,0.04)",
        "card-hover": "0 0 0 1px rgba(0,0,0,0.03), 0 8px 30px rgba(0,0,0,0.08)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
