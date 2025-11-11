/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        lobster: ['Lobster', 'cursive'],
           poppins: ['Poppins', 'sans-serif'],
           dancing: ['Dancing Script', 'cursive'],
           momo: ['Momo Signature', 'cursive'],
           mplus: ['M PLUS Rounded 1c', 'sans-serif'],
           roboto: ['Roboto', 'sans-serif'],
           titillium: ['Titillium Web', 'sans-serif'],
        
      },
    },
  },
  plugins: [],
}
