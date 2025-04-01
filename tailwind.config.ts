import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        palker: ["palker", "sans-serif"],
      },
      screens: {
        xs: "360px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
      },
      colors: {
        primary: {
          50: "#fbf5ef",
          100: "#f2e5d3",
          200: "#e4c8a3",
          300: "#d6a873",
          400: "#cc8d53",
          500: "#b76b3a",
          600: "#02ADED",
          700: "#8f412e",
          800: "#75362b",
          900: "#612d26",
          950: "#371511",
        },
        // BLACK
        secondary: {
          50: "#F3F3F3",
          100: "#E6E6E6",
          200: "#C1C1C1",
          300: "#9B9B9B",
          400: "#505050",
          500: "#050505",
          600: "#050505",
          700: "#030303",
          800: "#020202",
          900: "#020202",
        },
        // primary: {
        //   DEFAULT: "#02ADED", // Primary blue
        //   light: "#3B82F6", // Lighter shade
        //   dark: "#1E40AF", // Darker shade
        // },
      },
      keyframes: {
        customPing: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.1)", opacity: "0.5" },
          "100%": { transform: "scale(1.2)", opacity: "1" },
        },
      },
      animation: {
        customPing: "customPing 1.5s cubic-bezier(0, 0, 0.2, 1) infinite ",
      },

      backgroundImage: {
        parallex1:
          'url("https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        parallex2:
          'url("https://images.unsplash.com/reserve/91JuTaUSKaMh2yjB1C4A_IMG_9284.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
