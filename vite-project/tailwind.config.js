module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  safelist: [],
  purge: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  media: true,
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
