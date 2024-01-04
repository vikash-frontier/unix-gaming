/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mons: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
        base: "1rem",
        md: "1.5rem",
        lg: "1.25rem",
        xl: "2rem",
        xxl: "2.5rem",
        xxxl: "3rem",
        "4xl": "6rem",
        "2xl": "3.75rem",
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 800,
      },
      letterSpacing: {
        tight: "-0.01em",
      },
      colors: {
        transparent: "transparent",
        primary: "#FFFFFF",
      },
      screens: {
        sm: "600px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1536px",
      },

      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "1rem",
          lg: "2rem",
          xl: "3rem",
          "2xl": "4rem",
        },
      },
    },
  },
  plugins: [],
};
