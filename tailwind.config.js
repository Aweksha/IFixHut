/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Include HTML files to scan for class names
    "./src/**/*.{js,jsx,ts,tsx}", // Include TS/TSX files from src folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
