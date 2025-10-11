/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Opcional: Adicione a cor dourada/amarela do seu portfólio
      colors: {
        'custom-gold': '#d4af37',
        'dark-bg': '#1e1e1e',
        'dark-card': '#252525',
      },
    },
  },
  plugins: [
    // Adicionando um plugin para barra de rolagem estilizada
    require('tailwind-scrollbar'),
  ],
}

