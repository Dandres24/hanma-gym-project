// frontend/tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#BC0000', // Rojo Hanma
        dark: {
          900: '#0E0E0E', // Premium ultra oscuro
          800: '#121212', // Fondo general base
          700: '#2C2C2C', // Fondo de tarjetas
        },
        light: '#F5F5F5', // Blanco roto (no cansa la vista)
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Tipografía base
        display: ['Bebas Neue', 'sans-serif'], // Tipografía para títulos H1, H2
      }
    },
  },
  plugins: [],
}