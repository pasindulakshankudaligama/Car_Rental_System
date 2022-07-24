/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
          backgroundImage:{
            'carImg':"url('assets/img/dashboard.jpg')",
            'carImg2':"url('assets/img/car_01.jpg')"
          }
    },
  },
  plugins: [],
}
