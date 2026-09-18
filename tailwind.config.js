/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF7F1',
        cream: '#F4EEE2',
        sand: '#E9DFCC',
        charcoal: '#1A1512',
        espresso: '#2A2320',
        gold: {
          DEFAULT: '#B8965A',
          light: '#D4BC8A',
          dark: '#8A6F3E',
        },
        clay: '#8C6E4A',
        stone: {
          850: '#1F1B18',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Jost', '"Segoe UI"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.35em',
      },
    },
  },
  plugins: [],
}
