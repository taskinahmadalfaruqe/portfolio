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
      backgroundImage: {
        'background-image': "url('../Image/bg.jpg')",
        'bg-image-dark': "url('../Image/bgtwo.jpg')",
        'common-bg': "linear-gradient(to right, #fa5252, #dd2476)",
        'common-bg-hover': "linear-gradient(to left, #fa5252, #dd2476)",
      },

      colors: {
        lightbg: '#F3F6F6',
        darkbg: '#111111',
        lightdarkbg: '#1D1D1D',
      }
    },
  },
  plugins: [],
}

