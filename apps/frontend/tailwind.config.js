/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#f7f7f7',
      'secondary': '#2D7575',
      'white': '#FFFFFF',
      'light-gray': '#ccc'
    },
    extend: {},
  },
  plugins: [],
}

