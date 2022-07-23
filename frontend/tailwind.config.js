/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
          backgroundImage:{
            'carImg':"url('assets/img/dashboard.jpg')"
          }
    },
  },
  plugins: [],
}
