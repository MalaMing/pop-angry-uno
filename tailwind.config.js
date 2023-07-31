/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      colors: {
        'brown1': '#362706', 
        'brown2': '#857670',
        'brown3': '#665A48',
        'brown4': '#707070',
        'brown5': '#665A48',
        'brown6': '#92817A',
        'brown7': '#4A3F35',
        'brown8' : '#C7BCA1',
        'bg1': '#F8EDE3',
        'bg2': '#A2B29F',
        'bg3' : '#9DAB86',
      },
      fontFamily: {
        'sans': ['Roboto Slab', 'serif'],
      },
      fontSize: {
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
    },
    fontSize: {
      '2xl': ['1.5rem', {
        lineHeight: '2rem',
        letterSpacing: '-0.01em',
        fontWeight: '500',
      }],
      '3xl': ['1.875rem', {
        lineHeight: '2.25rem',
        letterSpacing: '-0.02em',
        fontWeight: '700',
      }],
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  }
    
  },
  plugins: [],
}
