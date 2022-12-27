/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: "'Plus Jakarta Sans', sans-serif",
      },
      colors: {
        'primary-400': 'hsl(1, 90%, 64%)',
        'primary-800': 'hsl(219, 85%, 26%)',
        'neutral-50': 'hsl(210, 60%, 98%)',
        'neutral-100': 'hsl(211, 68%, 94%)',
        'neutral-150': 'hsl(205, 33%, 90%)',
        'neutral-400': 'hsl(219, 14%, 63%)',
        'neutral-600': 'hsl(219, 12%, 42%)',
        'neutral-900': 'hsl(224, 21%, 14%)',
      },
    },
  },
  plugins: [],
}
