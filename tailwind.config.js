/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
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
        'BG1': "url('../bg.jpg')",
        'BG2': "url('../bgtwo.jpg')",
      },
      colors: {
        lightbg: '#F3F6F6',
        darkbg: '#111111',
        lightdarkbg: '#1D1D1D',
        whiteColor: '#fff',
        primaryColor: '#ef4060'
      },

    },
  },
  plugins: [],
}

