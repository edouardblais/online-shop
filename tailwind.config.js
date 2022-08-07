/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'homeimage': "url('/src/images/homeimage.jpg')",
      },
    },
  },
  plugins: [],
}
