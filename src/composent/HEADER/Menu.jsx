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
    gridTemplateColumns: "50% 45%",
    width: "100%",
    alignItems: "center",
    padding: "50px 0 30px 0!important",
    '@media (max-width:1502px)':{
      gridTemplateColumns: "40% 60%",
    },
    '@media (max-width:1006px)':{
      gridTemplateColumns: "45% 55%!important",
    },
    '@media (max-width:600px)':{
      gridTemplateColumns: "60% 40%!important",
    },
    '@media (max-width:320px)':{
      padding:"0",
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
            fontSize: "40px",
            color:textColor,
            '@media (max-width:1920px)':{
                fontSize: "20px!important",
            },
            '@media (max-width:1200px)':{
              fontSize: "18px!important",
            },
            '@media (max-width:1006px)':{
              fontSize: "15px!important",
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

  <AppBar position="static" color="navMenu" sx={{ boxShadow: "none" }}>
    <CssBaseline />
    <Toolbar sx={gridStyle} component="nav">

      <Typography variant="h1">
        <img className="logo" src="./image/logo.png" alt="Logo de arrow design" />
      </Typography>

      {/* MENU BURGER */}
      <ToggleButton onClick={toggleMenu} value="menu"
        sx={{
        display: { md: 'none' },
        width: "fit-content",
        background: theme.palette.btnReadMore.main,
        color: theme.palette.btnReadMore.contrastText,
        border:"2px solid #fff",
        justifySelf: "end",
        marginRight:"50px",
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
        '@media (max-width:600px)':{
          marginRight:"0px",
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
      <List sx={{ display: {xs:'none',md:'flex'}, justifyContent: "space-between"}}> 
        {itemMenu("#fff")}
      </List>
      
    </Toolbar>
  </AppBar>

</ThemeProvider>
  );    
};

export default Menu;
