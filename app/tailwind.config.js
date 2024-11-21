/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        win95: {
          gray: '#c0c0c0',
          dark: '#808080',
          darker: '#404040',
          light: '#ffffff',
          blue: '#000080',
          text: '#000000',
          teal: '#008080'
        }
      },
      fontFamily: {
        'ms-sans': ['"MS Sans Serif"', 'sans-serif'],
        'windows': ['"Pixelated MS"', 'sans-serif']
      }
    }
  },
  plugins: []
}