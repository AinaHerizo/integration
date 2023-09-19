import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import BebasNeuettf from './fonts/BebasNeue-Regular.ttf';
import OpenSansttf from './fonts/OpenSans-Regular.ttf';
import OpenSansItalic from './fonts/OpenSans-Italic.ttf';
import Header from './composent/Header';
import About from './composent/About';
import Service from './composent/Service';
import Portfolio from './composent/Portfolio';
import Price from './composent/Price';
import Contact from './composent/Contact';
import Footer from './composent/Footer';
import Team from './composent/Team';
import Photofolio from './composent/Photofolio';

const App = () => {
// DEFINITION DU THEME
  const theme = createTheme({
    // COULEUR
    palette:{
      text:{
        primary:"#454443",
        secondary: "#000",
        tierce: "#fff"
      },
      // COULEUR DU BOUTON
      btnReadMore:{
        main:'rgba(0,0,0,0)',
        dark:'#d25b38',
        contrastText:'#fff',
      },
      btnReadMore2:{
        main:'#d25b38',
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
        fontSize:"25px",
        color:"#fff",
        lineHeight: "30px",
        fontWeight:"bold",
        '@media (min-width:600px)':{
          fontSize:"25px",
          lineHeight: "30px",
        },
        '@media (min-width:900px)':{
          fontSize:"30px",
          lineHeight: "30px",
        },
        '@media (min-width:1200px)':{
          fontSize:"50px",
          lineHeight: "50px",
        },
        '@media (min-width:1920px)':{
          fontSize:"100px",
          lineHeight: "90px",
        },
      },
      h3:{
        fontSize:"20px",
        lineHeight: "25px",
        fontWeight:"bold",
        '@media (min-width:600px)':{
          fontSize:"30px",
          lineHeight: "30px",
        },
        '@media (min-width:1200px)':{
          fontSize:"40px",
          lineHeight: "40px",
        },
        '@media (min-width:1920px)':{
          fontSize:"80px",
          lineHeight: "85px",
        },
      },
      h4:{
        fontSize:"20px",
        fontWeight:"bold",
        '@media (min-width:600px)':{
          fontSize:"20px",
        },
        '@media (min-width:900px)':{
        },
        '@media (min-width:1200px)':{
          fontSize:"25px",
        },
        '@media (min-width:1920px)':{
          fontSize:"40px",
        },
      },
      h5:{
        fontSize:"18px",
        fontWeight:"bold",
        '@media (min-width:600px)':{
          fontSize:"18px",
        },
        '@media (min-width:900px)':{
        },
        '@media (min-width:1200px)':{
          fontSize:"20px",
        },
        '@media (min-width:1920px)':{
          fontSize:"30px",
        },
      },
      h6:{
        color:"#d25b38",
        fontSize:"18px",
        fontWeight:"bold",
        '@media (min-width:600px)':{
          fontSize:"18px",
        },
        '@media (min-width:900px)':{
        },
        '@media (min-width:1200px)':{
          fontSize:"20px",
        },
        '@media (min-width:1920px)':{
          fontSize:"25px",
        },
      },
    },
    // BREAKPOINTS
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1920,
        xxl: 2560,
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
            border:"5px solid #FFF",
            borderRadius: "0",
            width: "200px",
            boxShadow:"none",
            fontSize:"25px",
            ":hover":{
              border:"5px solid #d25b38",
              boxShadow:"none",
            },
            '@media (max-width:900px)':{
              width: "150px",
              fontSize:"15px",
              height:"50px",
            },
          },
        },
      },
      MuiButton2:{
        styleOverrides:{
          root:{
            border:"5px solid #d25b38",
            borderRadius: "0",
            width: "200px",
            boxShadow:"none",
            fontSize:"25px",
            '@media (max-width:900px)':{
              width: "150px",
              fontSize:"15px",
              height:"50px",
            },
          },
        },
      },
    },
})


// STYLE
const composantStyle={
  display:"grid",
  margin:"0 auto",
  padding: "50px 2rem",
  '@media (min-width:600px)':{
    maxWidth:"600px",
    flexDirection: "column",
  },
  '@media (min-width:900px)':{
    maxWidth:"900px",
  },
  '@media (min-width:1200px)':{
    maxWidth:"1200px",
    flexDirection: "row",
    gridTemplateColumns: "40% 60%",
  },
  '@media (min-width:1920px)':{
    maxWidth:"1920px",
  },
  '@media (min-width:2560px)':{
    maxWidth:"2560px",
  },
}


  return (
    <ThemeProvider theme="theme">
      <Header theme={theme}/>
      <About theme={theme}/>
      <Service theme={theme} blogStyle={composantStyle}/>
      <Portfolio theme={theme} portfolioStyle={composantStyle}/>
      <Team theme={theme} teamStyle={composantStyle}/>
      <Photofolio theme={theme}/>
      <Price theme={theme} priceStyle={composantStyle}/>
      <Contact theme={theme} contactStyle={composantStyle}/>
      <Footer theme={theme}/>
    </ThemeProvider>
  );
};

export default App;