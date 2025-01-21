/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        notes: {
          teal: "#16b2ab",
          black: "#1b1c1d",
          white: "#ececec",
        },
      },
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
