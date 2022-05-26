module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'eerie-black': {
          600: '#3C3C3E',
          700: '#323234',
          800: '#28282A',
          900: '#161617'
        },
        'coffee': '#6D4838',
        'slate-grey': '#717C88',
        'quick-silver': '#A7A8A3',
        'mid-grey': '90887E'
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }
  ],
}
