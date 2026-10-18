import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        editorial: ["var(--font-playfair)", "Georgia", "serif"],
        mono: ["var(--font-jetbrains-mono)", "Menlo", "monospace"],
        tech: ["var(--font-jetbrains-mono)", "Menlo", "monospace"],
      },
      colors: {
        navy: {
          50: "#f0f4fa",
          100: "#dce6f5",
          200: "#bfd2ee",
          300: "#93b4e3",
          400: "#608ed4",
          500: "#3b6dc6",
          600: "#2853a8",
          700: "#214388",
          800: "#1e3971",
          900: "#0f2347",
          950: "#09152b",
        },
        marketing: {
          parchment: "#F8F6F0",
          canvas: "#F4EFE6",
          card: "#FFFFFF",
          border: "#E7DFD3",
          text: "#1C1917",
          muted: "#78716C",
          terracotta: "#C2410C",
          rust: "#9A3412",
          amber: "#D97706",
          forest: "#065F46",
        },
        tech: {
          bg: "#080C14",
          canvas: "#05080E",
          card: "#0D131F",
          border: "#1E293B",
          text: "#F1F5F9",
          muted: "#64748B",
          cyan: "#00F0FF",
          emerald: "#10B981",
          violet: "#A78BFA",
          glow: "rgba(0, 240, 255, 0.15)",
        },
      },
    },
  },
  plugins: [],
};
export default config;

