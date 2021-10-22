module.exports = {
  mode: "jit",
  purge: [
    "./assets/**/*.{css}",
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./pages/*.{vue,js}",
    "./pages/**/*.{vue,js}",
    "./layouts/*.{vue,js}",
    "./layouts/**/*.{vue,js}",
    "./plugins/**/*.{js,ts}",
    "./*.{vue,js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
