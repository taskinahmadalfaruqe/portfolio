/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '10px',
        sm: '1rem',
        lg: '50px',
        xl: '50px',
        '2xl': '80px',
      },
    },

    extend: {
      colors: {
        lightbg: '#F3F6F6',
        darkbg: '#111111',
        lightdarkbg: '#1D1D1D',
      },

    },
  },
  plugins: [],
}

