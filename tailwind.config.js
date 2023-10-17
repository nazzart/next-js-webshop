/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
    theme: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px'
      },
      container: {
        padding: {
          DEFAULT: '1rem'
        },
      },
      extend: {
        colors: {
          white: "#ffffff",
          lightGray: "#f8f8f8",
          primary: '#0C2C52',
          secondary: '#CC00FF'
        },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    }
    },
    plugins: [],
  }
