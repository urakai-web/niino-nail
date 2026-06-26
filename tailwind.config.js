/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00C9B0",
          light: "#33D4BF",
          dark: "#00A892",
        },
        accent: "#E040A0",
        warm: {
          50: "#FFF5F8",
          100: "#FFEDF2",
          200: "#FDDDE7",
          300: "#F5B8C4",
        },
      },
      fontFamily: {
        sans: [
          '"Noto Sans JP"',
          '"Hiragino Sans"',
          '"Yu Gothic"',
          "sans-serif",
        ],
        serif: [
          '"Noto Serif JP"',
          '"Hiragino Mincho Pro"',
          '"Yu Mincho"',
          "serif",
        ],
      },
      letterSpacing: {
        widest2: "0.2em",
        widest3: "0.3em",
      },
    },
  },
  plugins: [],
};
