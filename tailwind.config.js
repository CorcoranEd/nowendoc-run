/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Work Sans", "sans-serif"],
        body: ["Work Sans", "sans-serif"],
      },
      zIndex: {
        "-10": "-10",
      },
      inset: {
        "1/2": "50%",
        "1/4": "25%",
      },
      opacity: {
        1: ".01",
        2: ".02",
        3: ".03",
        4: ".04",
        5: ".05",
        6: ".06",
        7: ".07",
        8: ".08",
        9: ".09",
        10: ".1",
      },
    },
  },
  plugins: [],
};
