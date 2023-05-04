/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,ts}"],
  theme: {
    extend: {
      colors: {
        'green-primary': '#8BAC3E',
        'green-secondary': '#F0FEEB',
        'green-tertiary': '#F9FFF6',
        'sky-primary': '#40A2B1',
        'sky-secondary': '#E6F3F5',
        'blue-primary': '#405EB6',
        'blue-secondary': '#EAEEFA',
        'pink-primary': '#B23F74',
        'pink-secondary': '#F9EEF3',
        'pistachio-primary': '#A4B441',
        'pistachio-secondary': '#F3F7D9',
      }
    },
  },
  plugins: [],
}

