/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        winston: {
          primary: '#66fcf1',
          secondary: '#1f2833'

        }
      }
    },
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px'
    },
    container: {
      padding: {
        xs: '1rem',
        sm: '1.5rem',
        md: '2rem',
      }
    }
  },
  plugins: [],
}
