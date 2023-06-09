/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'fondo': '#f1ede4',
        'amarillo': '#fda736;',
        'rojo': '#e02222',
        'grisOscuro': '#3a3a3a',
        'marron': '#905432',
        'naranja': '#e8512e'
      },
      fontFamily: {
        'roboto': 'var(--font-roboto)',
        'dancing': 'var(--font-dancing)',
        'sans': 'var(--font-mont)',
        'poppins': 'var(--font-pop)',
      },
      boxShadow: {
        'menu': 'rgba(0, 0, 0, 0.15) 5px 5px 1px'
      }
    },
  },
  plugins: [require('daisyui')],
}
