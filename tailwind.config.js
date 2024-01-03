/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,svelte}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "system-ui", "sans-serif"],
        serif: ["-apple-system-ui-serif", "ui-serif", "serif"],
        mono: ["ui-monospace", "mono"],
      },
    },
  },
  plugins: [],
}
