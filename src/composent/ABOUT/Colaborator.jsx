import { Box, ThemeProvider } from '@mui/material';
import React from 'react';
import OneColaborator from './OneColaborator';


const Colaborator = ({theme}) => {
    return (
        <ThemeProvider theme={theme}>
            <Box
            sx={{
                background:`url(${process.env.PUBLIC_URL}/image/about.jpg)`,
                backgroundRepeat:"no-repeat",
                backgroundSize: "cover",
                '@media(min-width: 600px)': {
                    backgroundSize: "cover",
                  },
                '@media(min-width: 1920px)': {
                    backgroundSize: "auto",
                    backgroundRepeat:"no-repeat",
                  },
                
            }}>
                <OneColaborator theme={theme} workingHours="WORKING HOUR" designerName="DESGINER NAME"/>
                <OneColaborator theme={theme} workingHours="WORKING HOUR" designerName="DESGINER NAME"/>
                <OneColaborator theme={theme} workingHours="WORKING HOUR" designerName="DESGINER NAME"/>
                <OneColaborator theme={theme} isLast workingHours="WORKING HOUR" designerName="DESGINER NAME"/>
            </Box>
        </ThemeProvider>
    );
};

export default Colaborator;