import type { Config } from "tailwindcss";


import plugin from "tailwindcss/plugin";



export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {

        white: '#FFFFFF',
        black: '#000000',


        primary: '#067FB5',
        'primary-dark': 'rgb(7 94 133)',
        'primary-400': '#067fb569',
        success: '#28a745',
        'success-dark': '#218838',
        danger: '#dc3545',
        'danger-dark': '#c82333',
        text: '#212529',
        'text-dark': '#343a40',
        link: '#007bff',
        'link-dark': '#0056b3',
        warning: '#ffe58f',
      },
    },
  },


  plugins: [

    plugin(function ({ addComponents, addUtilities, theme }) {


      const typography = {

        a: {
          "letter-spacing": "-0.025rem",
        },


        // p: {
        //   "font-size": "0.875rem",
        // },

        label: {
          "font-size": "0.875rem",
          // "font-weight": "600",
          // "line-height": "1.625em",
          // "letter-spacing": "-0.025rem",
          "display": "inline-block",
        },


        table: {
          "border-collapse": "inherit",
        },


        h1: {
          "font-weight": "600",
          "font-size": "1.5rem",
          "line-height": "2rem",
          "letter-spacing": "-0.06rem",
        },


        h2: {
          "font-weight": "600",
          "font-size": "1.2rem",
          "line-height": "1.5rem",
          // "letter-spacing": "-0.069rem",
        },


        h3: {
          "font-weight": "600",
          "font-size": "1rem",
          "line-height": "1.2rem",
        },


        h4: {
          "font-weight": "600",
          "font-size": "1.125rem",
          "line-height": "1.484rem",
        },


        h5: {
          "font-size": "1rem",
          "line-height": "1.484rem",
        },


      };
      addComponents(typography);
    }),


    // ========================================================

    plugin(function ({ addBase, theme }) {
      addBase({
        ':root': {

          '--white-color': theme('colors.white'),
          '--black-color': theme('colors.black'),



          '--primary-color': theme('colors.primary'),
          '--primary-color-400': theme('colors.primary-400'),
          '--primary-color-dark': theme('colors.primary-dark'),

          '--primary-success': theme('colors.success'),
          '--primary-success-dark': theme('colors.success-dark'),


          '--primary-danger': theme('colors.danger'),
          '--primary-danger-dark': theme('colors.danger-dark'),


          '--primary-text': theme('colors.text'),
          '--primary-text-dark': theme('colors.text-dark'),


          '--primary-link': theme('colors.link'),
          '--primary-link-dark': theme('colors.link-dark'),



          '--primary-warning': theme('colors.warning'),

        },
      });
    }),
  ],
} satisfies Config;
