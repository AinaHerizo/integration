import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
  CssBaseline,
  Drawer,
  Link,
  List,
  ListItem,
  ThemeProvider,
  ToggleButton,
  styled
} from "@mui/material";
// import MenuIcon from '@mui/icons-material/Menu';





const Menu = ({ theme}) => {
  
  // fuction pour le burger menu
const [isMenuOpen, setIsMenyOpen]= useState(false)

function toggleMenu(){
  setIsMenyOpen(!isMenuOpen)
}

function closeMenu(){
  setIsMenyOpen(false)
}

// LIST DES MENUS
  const navItems = [
    { name: "HOME", id: "home" },
    { name: "ABOUT US", id: "about" },
    { name: "SERVICES", id: "services" },
    { name: "PORTFOLIO", id: "portfolio" },
    { name: "OUR TEAM", id: "team" },
    { name: "NEWS", id: "news" },
    { name: "CONTACT", id: "contact" },
  ];
  
// STYLE PERSONALISE
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "40% 60%",
    width: "100%",
    alignItems: "center",
    padding: "50px 0 30px 0!important",
    '@media (min-width:1200px)':{
      gridTemplateColumns: "40% 60%",
    },
    '@media (min-width:2560px)':{
      gridTemplateColumns: "45% 55%",
    },
  };
  // STYLE DU MENU LIST
  const ListMenu = styled(ListItem)({
    width: "fit-content",
    borderBottom: "5px solid rgba(0,0,0,0)",
    "&:hover": {
      borderBottom: "5px solid #fff",
    },
    ":first-of-type":{
      borderBottom: "5px solid #fff",
    }
  });

  // LE JSX DU MENU
  function itemMenu(textColor){
    return (<>
    {navItems.map((item, index) => (
      <ListMenu key={index}>
        <Link
          href={"#" + item.id}
          color="inherit"
          underline="none"
          sx={{ 
            fontSize: "25px",
            color:textColor,
            '@media (min-width:1200px)':{
              fontSize: "15px!important",
            },
            '@media (min-width:1920px)':{
              fontSize: "20px!important",
            },
            '@media (min-width:2560px)':{
              fontSize: "25px!important",
            },
          }}
          onClick={closeMenu}
        >
          {item.name}
        </Link>
      </ListMenu>
    ))}
    </>)
  }










  return (

<ThemeProvider theme={theme}>

  <AppBar position="static" color="navMenu" 
  sx={{
    boxShadow: "none",
    margin:"0 auto",
    '@media (min-width:600px)':{
      maxWidth:"600px",
    },
    '@media (min-width:900px)':{
      maxWidth:"900px",
    },
    '@media (min-width:1200px)':{
      maxWidth:"1200px",
    },
    '@media (min-width:1920px)':{
      maxWidth:"1920px",
    },
    '@media (min-width:2560px)':{
      maxWidth:"2560px",
    },
  }}>

    <CssBaseline />
    <Toolbar sx={gridStyle} component="nav">

      <Typography variant="h1">
        <img className="logo" src="./image/logo.png" alt="Logo de arrow design" />
      </Typography>

      {/* MENU BURGER */}
      <ToggleButton onClick={toggleMenu} value="menu"
        sx={{
        display: { lg: 'none' },
        background: theme.palette.btnReadMore.main,
        color: theme.palette.btnReadMore.contrastText,
        border:"2px solid #fff",
        justifySelf: "end",
        ":active":{
          background: theme.palette.btnReadMore.dark,
          color: theme.palette.btnReadMore.contrastText,
          border:"2px solid #d25b38",
        },
        ":hover":{
          background: theme.palette.btnReadMore.dark,
          color: theme.palette.btnReadMore.contrastText,
          border:"2px solid #d25b38",
        },
      }}>MENU</ToggleButton>

      <Drawer 
      anchor="right"
      open={isMenuOpen}
      onClose={closeMenu}
      >
        <List>
          {itemMenu("#000")}
        </List>
      </Drawer>


      {/* MENU NORMAL */}
      <List sx={{ display: {xs:'none',lg:'flex'}, justifyContent: "space-between"}}> 
        {itemMenu("#fff")}
      </List>
      
    </Toolbar>
  </AppBar>

</ThemeProvider>
  );    
};

export default Menu;
