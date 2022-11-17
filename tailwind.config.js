/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/*.tsx", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
      screens: {
      'mobile': {'min': '320px', 'max': '768px'},
      'mobileTablet' : {'min': '320px', 'max': '1050px' },
        'navbarBreakpoint': {'min': '0px', 'max': '1300px'},

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1050px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      'lgxl': {'min': '1024px', 'max': '1280px'},

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },


    extend: {},
  },
  plugins: [],
}
