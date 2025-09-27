/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
   content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Inclui todos os arquivos fonte
  ],
  theme: {
    extend: {
      colors: {
        dark: '#121214',
        light: '#E1E1E6',
        primary: '#00C9C5',
        primary_hover: '#00c9c69b',
        secondry: '#FC5485',
        secondry_hover: '#fc548490',
        custom_color: '#242752',
        text_color: '#707070',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        mono: ['"Roboto Mono"', 'monospace'],
      },
      screens: {
        'lg': {'max': '1024px'},
        // => @media (max-width: 1024px) { ... }
      },
      backgroundImage:{
        "sombra":"url('/assets/Grupo12.png')"
      },
      borderRadius:{
        boder_radius_big:"100%",
        boder_radius:"8px",
      },
      animation:{
       
      },
      fontSize: {
          "title": "2.4rem",
          "subtitle": "1.5rem",
          "Bigsubtitle": "1.6rem",
          "bigTitle": "3rem",
          "Bigprg": "1.4rem",
          "prg": "1.2rem",
          "smprg": "1rem",
    },
      plugins: [
      ],
    }
  }
}
