/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {

        azulScuro: '#2B2D42',
        verdeclaro: '#00BFA5',
        testeAzul: '#003153',
        cinzaScuro: '#666666',
        branco: '#F8F8FF',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
