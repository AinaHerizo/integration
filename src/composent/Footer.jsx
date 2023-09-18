import { ThemeProvider } from '@emotion/react';
import { Box, CssBaseline } from '@mui/material';
import React from 'react';

const Footer = ({theme}) => {
    return (
        <Box
            sx={{
                textAlign:'center',
                background:"#f2f2f2",
                padding: '30px',
                color: theme.palette.secondary.main, 
                fontFamily: 'Open Sans',
                fontSize:"15px",
                '@media (min-width:900px)':{
                    fontSize:"25px",
                },
            }}
        >
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <p>Copyright © 2017. Developped by ANDRIAMAHARO Aina Herizo</p>
            </ThemeProvider>   
        </Box>
    );
};

export default Footer;