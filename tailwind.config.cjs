/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        Red: "hsl(1, 90%, 64%)",
        Blue: "hsl(219, 85%, 26%)",
        White: "hsl(0, 0%, 100%)",
        Verylgb: "hsl(210, 60%, 98%)",
        Lightgb1: "hsl(211, 68%, 94%)",
        Lightgb2: "hsl(205, 33%, 90%)",
        Grayishb: "hsl(219, 14%, 63%)",
        Darkgb: "hsl(219, 12%, 42%)",
        Verydb: "hsl(224, 21%, 14%)",
      },
    },
  },
  plugins: [],
}
