/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        typing: 'typing 3.5s steps(30, end) forwards',
        gradient: 'gradientMove 6s ease infinite',
      },
      keyframes: {
        typing: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        gradientMove: {
          '0%, 100%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'), 
  ],
};
