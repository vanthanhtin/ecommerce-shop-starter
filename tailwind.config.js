const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}',
            'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
          ],
  important: true,
  theme: {
    fontFamily: {
      // primary: [
      //   "Quicksand"
      // ],
      'primary': [`'Nunito', sans-serif`],
      'fontHead': [`'Paytone One', sans-serif`],
    },
    container: {
      padding: {
        // DEFAULT: '30px',
        lg: '0',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: '#222222',
        secondary: '#F69946',
        tertiary: '#3A3330',
        nau: '#564741',
        vang: '#FCF9F4',
        xam: '#898988'
      },
      backgroundImage: {
        hero: "url('./img/Hero.png')",
        section3: "url(./img/bg-section-3.png)"
      },
      boxShadow: {
        '3xl': '5px 2px 50px 0px rgba(0,0,0,0.1)',
      },
      transitionProperty: {
        duration: '400ms'
      }
      
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
});
