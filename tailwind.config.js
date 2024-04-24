/** @type {import('tailwindcss').Config} */
export default {
  content: [ // en donde tiene que scanear y agregar tailwind css
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}" // /**/* => todos los archivos y carpetas con las extensiones {js,ts,jsx,tsx}
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

