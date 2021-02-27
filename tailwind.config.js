module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Public Sans', 'sans-serif']
        // sans: ['Public Sans', 'Fira Sans', 'Inter', 'sans-serif']
      },
    },
  },
  variants: {
    extend: {
      borderRadius: ['hover'],
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
