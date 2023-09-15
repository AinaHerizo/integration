import { ThemeProvider } from '@emotion/react';
import { Button, Grid, Typography } from '@mui/material';
import React from 'react';

const Welcome = ({theme}) => {

    const headerParagrapheStyle = {
        fontSize:"25px",
        fontFamily:"Open Sans",
        margin:"30px 0px 60px",
        '@media (max-width:1024px)':{
            fontSize:"20px",
        },
        '@media (max-width:600px)':{
            fontSize:"15px",
            margin:"15px 0px 20px",
        },
    }

    return (
        <ThemeProvider theme={theme}>
            <Grid container column={12}>
                <Grid xs={12} sm={5}>
                    <Typography variant='h2'>WELCOME TO THE <span style={{ color: theme.palette.primary.main }}>AWARD WINNING</span> AGENCY</Typography>
                    <Typography
                    sx={headerParagrapheStyle}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim animi ex nisi a tempora eum minus atque.</Typography>
                    <Button variant='contained' color='btnReadMore'>READ MORE</Button>
                </Grid>
            </Grid >
        </ThemeProvider>
    );
};

export default Welcome;