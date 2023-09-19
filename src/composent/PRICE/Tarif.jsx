import { Box, Button, Card, CardActions, CardContent, ThemeProvider, Typography } from '@mui/material';
import React from 'react';

const Tarif = ({imageTitle, tarifTitle, nickTitle, price, theme, children, moyen}) => {


    const cardStyle ={
        textAlign:"center",
        '@media (min-width:600px)':{
            width:"80%",
          },
        '@media (min-width:1200px)':{
            width:"100%",
        },
        '@media (min-width:1920px)':{
            width:"90%",
        },
    }
    
    const priceStyle ={
        fontSize:"30px",
        fontWeight: "bold",
        color: moyen ? "#d25b38" : "inherit",
        '@media (min-width:1200px)':{
            fontSize:"40px",
        },
        '@media (min-width:1920px)':{
            fontSize:"50px",
        },
    }



    return (
        <ThemeProvider theme={theme}>
       <Card sx={cardStyle}>
            <CardContent>
                <Box><img src={"./image/"+imageTitle+".png"} alt="representatio du tarif" /></Box>
                <Typography variant='h5'>{tarifTitle}</Typography>
                <Typography variant='h6'>{nickTitle}</Typography>
                <p>{children}</p>
                <Typography sx={priceStyle}>${price}</Typography>
            </CardContent>
            <CardActions sx={{justifyContent:"center"}}>
                <Button variant='contained' color='btnReadMore2' component="MuiButton2">READ MORE</Button>
            </CardActions>
       </Card>
       </ThemeProvider>
    );
};

export default Tarif;