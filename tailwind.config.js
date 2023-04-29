/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: "#191A19",
      yellow: "#FFF734",
      green: "#68F590",
      grey: "#F3F3F3",
      "grey-light": "#FAFAFA",
      "green-light": "#d2eff1",
      white: "#fff",
    },
    fontFamily: {
      sans: ["Georgia", "sans-serif"],
      serif: ["Merriweather", "serif"],
      display: ["Oswald"],
    },
    extend: {},
  },
  plugins: [],
};
