import { Box, ThemeProvider } from '@mui/material';
import React from 'react';
import OneColaborator from './OneColaborator';


const Colaborator = ({theme}) => {
    const initializeP = {
        'p' :
            theme.palette.text.secondary
    }
    return (
        <ThemeProvider theme={theme}>
            <Box
            sx={{
                background:`url(${process.env.PUBLIC_URL}/image/about.jpg)`,
                backgroundRepeat:"no-repeat",

            }}>
                <OneColaborator theme={theme} workingHours="WORKING HOUR" designerName="DESGINER NAME"/>
                <OneColaborator theme={theme} workingHours="WORKING HOUR" designerName="DESGINER NAME"/>
                <OneColaborator theme={theme} workingHours="WORKING HOUR" designerName="DESGINER NAME"/>
                <OneColaborator theme={theme} workingHours="WORKING HOUR" designerName="DESGINER NAME"/>
            </Box>
        </ThemeProvider>
    );
};

export default Colaborator;