module.exports = {
  mode: "jit",
  content: ["./pages/**/*.js", "./pages/**/*.mdx", "./components/**/*.jsx"],
  safelist: ["opacity-0", "animate-fade-in"],
  darkMode: "class",
  theme: {
    screens: {
      xs: "370px",
      ph: "410px",
      sm: "640px",
      md: "740px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      animation: {
        "spin-slow": "spin 4s linear infinite",
        "fade-in": "fade-in 0.5s ease-in-out forwards",
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        8: "8px",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.1)",
        DEFAULT:
          "0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.2)",
        none: "none",
      },
      colors: {
        primary: {
          DEFAULT: "#4361a2",
          light: "#73a0ec",
          dark: "#132257",
        },
        accent: {
          DEFAULT: "#c73156",
          light: "#ff6188",
          dark: "#8f0024",
        },
      },
      fontFamily: {
        sans: [
          "Public Sans",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "sans-serif",
        ],
        serif: ["-apple-system-ui-serif", "ui-serif", "serif"],
        mono: ["Fira Code", "ui-monospace", "mono"],
      },
      height: {
        76: "19rem",
        88: "22rem",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0, transform: "translateY(50px)" },
          "100%": { opacity: 1 },
        },
      },
      minHeight: {
        "1/5": "20vh",
        "1/4": "25vh",
        "1/3": "33vh",
        "2/5": "40vh",
        "1/2": "50vh",
        "3/5": "60vh",
        "2/3": "66vh",
        "3/4": "75vh",
        "4/5": "80vh",
      },
      spacing: {
        13: "3.25rem",
      },
      translate: {
        fullx2: "200%",
        fullx3: "300%",
        fullx4: "400%",
        fullx5: "500%",
      },
      width: {
        76: "19rem",
      },
      zIndex: {
        "-10": "-10",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: null,
            strong: {
              fontWeight: 700,
            },
            hr: {
              borderWidth: 2,
              borderColor: theme("colors.gray.500"),
            },
            blockquote: {
              fontWeight: 400,
              borderLeftColor: theme("colors.gray.500"),
            },
            "ol > li::before": {
              color: theme("colors.gray.900"),
            },
            "ul > li::before": {
              backgroundColor: theme("colors.gray.900"),
            },
            h1: {
              fontSize: null,
            },
            h3: {
              fontWeight: 700,
            },
            ":not(pre) > code": {
              color: theme("colors.gray.900"),
              backgroundColor: theme("colors.gray.200"),
              padding: 3,
              borderRadius: 4,
              margin: 0,
              fontWeight: 400,
            },
            "code::before": {
              content: "none",
            },
            "code::after": {
              content: "none",
            },
          },
        },
        dark: {
          css: {
            a: {
              color: theme("colors.gray.100"),
            },
            strong: {
              color: theme("colors.white"),
            },
            hr: {
              borderColor: theme("colors.gray.400"),
            },
            blockquote: {
              fontWeight: 400,
              color: theme("colors.white"),
              borderLeftColor: theme("colors.gray.400"),
            },
            li: {
              color: theme("colors.gray.300"),
            },
            "ol > li::before": {
              color: theme("colors.gray.400"),
            },
            "ul > li::before": {
              backgroundColor: theme("colors.gray.400"),
            },
            h1: {
              color: theme("colors.white"),
            },
            h2: {
              color: theme("colors.white"),
            },
            h3: {
              fontWeight: 700,
              color: theme("colors.white"),
            },
            h4: {
              color: theme("colors.gray.300"),
            },
            p: {
              color: theme("colors.gray.300"),
            },
            ":not(pre) > code": {
              color: theme("colors.gray.300"),
              backgroundColor: theme("colors.gray.700"),
              padding: 4,
              borderRadius: 6,
              margin: 0,
              fontWeight: 400,
            },
            "code::before": {
              content: "none",
            },
            "code::after": {
              content: "none",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
