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
      },
    },
  },
  plugins: [],
};
export default config;

