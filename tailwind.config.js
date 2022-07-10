module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        shiftLeft1: 'shiftLeft1 4s ease-in-out infinite',
        shiftLeft2: 'shiftLeft2 4s ease-in-out infinite',
      },
      colors: {
        'eerie-black': {
          100: '#F5F5F5',
          200: '#EAEAEB',
          300: '#ACACAF',
          400: '#828287',
          500: '#6E6E72',
          600: '#3C3C3E',
          700: '#323234',
          800: '#28282A',
          900: '#161617'
        },
        'breen': {
          100: '#ECF8F8',
          200: '#C3E9E9',
          300: '#A6DEDE',
          400: '#88D3D3',
          700: '#4CBDBD',
          800: '#42B3B3',
          900: '#2C7777'
        },
        'coffee': '#6D4838',
        'slate-grey': '#717C88',
        'quick-silver': '#A7A8A3',
        'mid-grey': '90887E'
      },
      keyframes: {
        shiftLeft1: {
          '0%, 30%': { transform: 'translateX(0)' },
          '80%, 100%': { transform: 'translateX(-20%)' },
        },
        shiftLeft2: {
          '0%, 30%': { transform: 'translateX(0)' },
          '80%, 100%': { transform: 'translateX(-10%)' },
        },
      },
      screens: {
        'hover-hover': {'raw': '(hover: hover)'},
        'hover-none': {'raw': '(hover: none)'},
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    ({ addVariant }) => {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    },
  ],
}
