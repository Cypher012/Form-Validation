/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./**/*.{html,js,css}"],
  theme: {
    extend: {},
  },
  plugins: [],
 
};

// npx tailwindcss -i ./CSS/input.css -o ./CSS/output.css --watch
