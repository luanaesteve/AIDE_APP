/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
      'sm': '576px',
      // => @media (min-width: 576px) { ... }
    
      'md': '768px',
      // => @media (min-width: 768px) { ... }
    
      'lg': '992px',
      // => @media (min-width: 992px) { ... }
    
      'xl': '1200px',
      // => @media (min-width: 1200px) { ... }
    },
    extend: {
      colors: {
        'primary': '#42275A',
        'secondary': '#734B6D',
        'violetita': '#B59FD7',
        'gris': '#D9D9D9',
        'violetaosc':'#230631',
        'blue': '#1fb6ff',
        'naranjita':'#CC5333',
        'violet':'#472E6C',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'black': '#000000',
      'white': '#FFFFFF',
      primary: {
        100: "#3A00B0",
        300: "#29007D",
        900: "#120037",
      }
      },
    },
  },
  plugins: [],
}
