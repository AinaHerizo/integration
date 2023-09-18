import { ThemeProvider } from '@emotion/react';
import { Box, Typography } from '@mui/material';
import React from 'react';

const TitleThird = ({theme, firstCarTitle, orangeTitle, secondCarTitle}) => {

    const titleStyle ={
        '@media (min-width:600px)':{
            marginBottom:"16px",
          },
        '@media (min-width:1200px)':{
            display: "flex",
            alignItems: "flex-end",
            marginBottom:"0",
        },
    }

    return (
        <ThemeProvider theme={theme}>
            <Box sx={titleStyle}>
                <Typography variant='h3'>{firstCarTitle} <span style={{ color: theme.palette.primary.main }}>{orangeTitle} </span>{secondCarTitle}</Typography>
            </Box>
        </ThemeProvider>
    );
};

export default TitleThird;