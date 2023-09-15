import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import BebasNeuettf from './fonts/BebasNeue-Regular.ttf';
import OpenSansttf from './fonts/OpenSans-Regular.ttf';
import OpenSansItalic from './fonts/OpenSans-Italic.ttf';
import Header from './composent/Header';
import About from './composent/About';
import Blog from './composent/Blog';
import Team from './composent/Team';
import Work from './composent/Work';
import Price from './composent/Price';
import Contact from './composent/Contact';
import Footer from './composent/Footer';
import Services from './composent/Services';

const App = () => {
// DEFINITION DU THEME
  const theme = createTheme({
    // COULEUR
    palette:{
      text:{
        primary:"#454443",
        secondary: "#000",
      },
      // COULEUR DU BOUTON
      btnReadMore:{
        main:'rgba(0,0,0,0)',
        dark:'#d25b38',
        contrastText:'#fff',
      },
      navMenu:{
        main: 'rgba(0,0,0,0)',
        contrastText:'#fff',
      },
      primary:{
        main:"#d25b38",
        contrastText:'#fff',
      },
      secondary:{
        main:"#454443",
        contrastText:'#fff',
      }
    },
    // FONTS
    typography: {
      fontFamily: 'Bebas Neue, Open Sans, Arial',
      // VARIANT
      h2:{
        fontSize:"100px",
        color:"#fff",
        lineHeight: "90px",
        '@media (max-width:1204px)':{
          fontSize:"70px",
          lineHeight: "65px",
        },
        '@media (max-width:960px)':{
          fontSize:"50px",
          lineHeight: "45px",
        },
        '@media (max-width:600px)':{
          fontSize:"30px",
          lineHeight: "30px",
        },
      },
      h3:{
        fontSize:"80px",
        lineHeight: "85px",
      }
    },
    // BREAKPOINTS
    breakpoints: {
      values: {
        xs: 0,
        sm: 601,
        md: 961,
        lg: 1201,
        xl: 1537,
      },
    },
    // Remplace les valeurs par deffaut 
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'Bebas Neue';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: local('Bebas Neue'), local('BebasNeue-Regular'), url(${BebasNeuettf}) format('ttf');
            }
          
          @font-face {
            font-family: 'Open Sans';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: local('Open Sans'), local('OpenSans-Regular'), url(${OpenSansttf}) format('ttf');
            }

          @font-face {
            font-family: 'Open Sans Italic';
            font-style: italic;
            src: local('Open Sans'), local('OpenSans-Regular'), url(${OpenSansItalic}) format('ttf');
            }
        `,
      },
      // BUTTON PERSONALISE
      MuiButton:{
        styleOverrides:{
          root:{
            border:"5px solid #fff",
            borderRadius: "0",
            width: "200px",
            boxShadow:"none",
            fontSize:"25px",
            ":hover":{
              border:"5px solid #d25b38",
              boxShadow:"none",
            },
            '@media (max-width:600px)':{
              width: "100px",
              fontSize:"15px",
              height:"50px",
          },
          },
        },
      },
    },
})  


  return (
    <ThemeProvider theme="theme">
      <Header theme={theme}/>
      <About theme={theme}/>
      <Services theme={theme}/>
      <Blog theme={theme}/>
      <Team theme={theme}/>
      <Work theme={theme}/>
      <Price theme={theme}/>
      <Contact theme={theme}/>
      <Footer theme={theme}/>
    </ThemeProvider>
  );
};

export default App;