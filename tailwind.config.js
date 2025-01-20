/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      screens: {
        widescreen: { raw: "(min-apect-ratio: 3/2)" },
        tallscreen: { tall: "(min-apect-ratio: 1/2)" },
      },
    },
  },
  plugins: [],
};
