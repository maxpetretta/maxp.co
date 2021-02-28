module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4361a2',
          light: '#73a0ec',
          dark: '#132257',
        },
        accent: {
          DEFAULT: '#c73156',
          light: '#ff6188',
          dark: '#8f0024',
        },
      },
      fontFamily: {
        sans: ['Public Sans', 'sans-serif']
        // sans: ['Public Sans', 'Fira Sans', 'Inter', 'sans-serif']
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              textDecoration: null,
              fontWeight: 700,
              '&:hover': {
                color: theme('colors.white'),
              },
            },
          },
        },
      }),
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
