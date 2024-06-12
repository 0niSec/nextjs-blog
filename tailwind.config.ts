import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)", // Replace with your desired green shade
        "accent-primary": "rgb(var(--color-accent-primary) / <alpha-value>)", // Array for easier access
        "accent-secondary":
          "rgb(var(--color-accent-secondary) / <alpha-value>)",
        success: "rgb(var(--color-success) / <alpha-value>)", // Can inherit from primary
        info: "rgb(var(--color-info) / <alpha-value>)", // Teal
        warning: "rgb(var(--color-warning) / <alpha-value>)", // Yellow
        error: "rgb(var(--color-error) / <alpha-value>)", // Red
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

export default config;
