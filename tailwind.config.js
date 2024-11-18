/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4ADE80', // Custom green
        secondary: '#64748B', // Grayish blue
      },
    }
  },
  plugins: [],
}

