const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    `./src/stories/**/*.{js,jsx,ts,tsx,mdx}`,
  ],
  theme: {
    extend: {
      width: {
        container: '1320px'
      },
      fontFamily: {
        'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        display01: ['72px', '120%'],
        heading01: ['56px', '120%'],
        heading02: ['48px', '120%'],
        heading03: ['40px', '120%'],
        heading04: ['36px', '120%'],
        heading05: ['32px', '120%'],
        bodyxxl: ['24px', '150%'],
        bodyxl: ['20px', '150%'],
        bodylarge: ['18px', '150%'],
        bodymedium: ['16px', '150%'],
        bodysmall: ['14px', '150%'],
        bodytiny: ['12px', '130%'],
      },
      boxShadow: {
        card: '0px 0px 12px 0px rgba(32, 181, 38, 0.32)',
      },
      colors: {
        color: {
          warning: '#FF8A00',
          danger: '#EA4B48',
        },
        primary: {
          soft: '#84D187',
          hard: '#2C742F',
          DEFAULT: '#00B207'
        },
        greyscale: {
          '900': '#1A1A1A',
          '800': '#333333',
          '700': '#4D4D4D',
          '600': '#666666',
          '500': '#808080',
          '400': '#999999',
          '300': '#B3B3B3',
          '200': '#CCCCCC',
          '100': '#E6E6E6',
          '50': '#F2F2F2',
        },
        greengray: {
          '900': '#002603',
          '800': '#173B1A',
          '700': '#2B572E',
          '600': '#406B42',
          '500': '#618062',
          '400': '#7A997C',
          '300': '#96B297',
          '200': '#B4CCB4',
          '100': '#DAE5DA',
          '50': '#EDF2EE',
        }
      }
    },
  },
  plugins: [],
}
