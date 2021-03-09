module.exports = {
  purge: ['./pages/**/*.js', './pages/**/*.mdx', './components/**/*.jsx'],
  darkMode: 'class',
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
        sans: ['Public Sans', '-apple-system', 'sans-serif'],
        mono: ['Fira Code', 'mono'],
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
           a: null,
            strong: {
              fontWeight: 700,
              transition: 'color 300ms ease-in-out',
            },
            hr: {
              borderColor: theme('colors.gray.300'),
              transition: 'border-color 300ms ease-in-out',
            },
            blockquote: {
              borderLeftColor: theme('colors.gray.300'),
              transition: 'color 300ms ease-in-out',
              transition: 'border-left-color 300ms ease-in-out',
            },
            li: {
              transition: 'color 300ms ease-in-out',
            },
            'ol > li::before': {
              color: theme('colors.gray.900'),
              transition: 'color 300ms ease-in-out',
            },
            'ul > li::before': {
              backgroundColor: theme('colors.gray.900'),
              transition: 'background-color 300ms ease-in-out',
            },
            h1: {
              fontSize: null,
              transition: 'color 300ms ease-in-out',
            },
            h2: {
              transition: 'color 300ms ease-in-out',
            },
            h3: {
              transition: 'color 300ms ease-in-out',
            },
            h4: {
              transition: 'color 300ms ease-in-out',
            },
            p: {
              transition: 'color 300ms ease-in-out',
            },
          },
        },
        lg: {
          css: {
            h1: null,
          },
        },
        dark: {
          css: {
            a: null,
            strong: {
              color: theme('colors.white'),
              transition: 'color 300ms ease-in-out',
            },
            hr: {
              borderColor: theme('colors.gray.600'),
              transition: 'border-color 300ms ease-in-out',
            },
            blockquote: {
              color: theme('colors.gray.300'),
              borderLeftColor: theme('colors.gray.600'),
              transition: 'color 300ms ease-in-out',
              transition: 'border-left-color 300ms ease-in-out',
            },
            li: {
              color: theme('colors.gray.300'),
              transition: 'color 300ms ease-in-out',
            },
            'ol > li::before': {
              color: theme('colors.gray.300'),
              transition: 'color 300ms ease-in-out',
            },
            'ul > li::before': {
              backgroundColor: theme('colors.gray.300'),
              transition: 'background-color 300ms ease-in-out',
            },
            h1: {
              color: theme('colors.gray.300'),
              transition: 'color 300ms ease-in-out',
            },
            h2: {
              color: theme('colors.gray.300'),
              transition: 'color 300ms ease-in-out',
            },
            h3: {
              color: theme('colors.gray.300'),
              transition: 'color 300ms ease-in-out',
            },
            h4: {
              color: theme('colors.gray.300'),
              transition: 'color 300ms ease-in-out',
            },
            p: {
              color: theme('colors.gray.300'),
              transition: 'color 300ms ease-in-out',
            },
          },
        },
      }),
    },
  },
  variants: {
    typography: ['dark'],
    extend: {
      borderRadius: ['hover'],
      translate: ['checked'],
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
