/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#910D3F',
        secondary: '#C70039',
        tertiary: '#FF5733',
        'tertiary-100': '#FF573370',
        'tertiary-200': '#FF573340',
        yellow: '#FFC301',
        gray: '#4D4D4D',
        light: '#F2F3F5'
      },
      screens: {
        xsm: '390px',
        xlg: '1030px',
        xmd: '890px'
      }
    }
  },
  plugins: []
}
