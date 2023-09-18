import { ThemeProvider } from '@emotion/react';
import { Typography, Box } from '@mui/material';
import React from 'react';

const OneColaborator = ({theme, workingHours, designerName, isLast }) => {

    const box1Style = {
        gridTemplateColumns: "100%",
        padding: "20px 0",     
        '@media (min-width: 900px)': {
            width: "100%",
            display: "grid",
            gridTemplateColumns: "40% 10% 50%",
            alignItems: "center",
        },
        '@media (min-width: 1920px)': {
            gridTemplateColumns: "33% 6% 61%",
            padding: "20px 0",
        },
        '@media (min-width: 2560px)': {
            gridTemplateColumns: "25% 5% 70%",
            padding: "20px 0",
        },
    };

    const box2Style = {
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        margin: "0 20px",
        borderBottom: isLast ? "none" : "1px solid #fff", // Appliquer la bordure uniquement si ce n'est pas le dernier
        '@media (max-width: 600px)': {
            borderBottom: "1px solid #fff",
        },
    };


    return (
        <ThemeProvider theme={theme}>
            <Box sx={box1Style}>
                <Box sx={box2Style}>
                    <Typography variant="h4">
                        {workingHours}
                    </Typography>
                    <Typography variant='h5'
                    sx={{
                        color:"#fff",
                        paddingBottom:"30px",
                    }}>
                        {designerName}
                    </Typography>
                </Box>
                <Box className="iconBox">
                    <img className="iconAbout" src="./image/icon-about.png" alt="icon" />
                </Box>
                <Box
                 sx={{
                    color:"#fff",
                    '@media (min-width: 600px)': {
                        marginLeft:"1rem",
                      },
                    '@media (min-width: 1920px)': {
                        color:"#000",
                      },
                      '@media (min-width: 1200px)': {
                        '& p': {
                            marginBottom: "0",
                          },
                      },
                 }}
                >
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque sunt voluptate distinctio nemo aliquam mollitia quo est ratione minima fuga iure error labore, unde neque eaque cupiditate sequi. Quis dolorum quo nisi fuga dolorem iste quibusdam rerum, sed iusto aut voluptatem vel ad natus unde ex, aliquid, quasi saepe nam!
                    </p>
                </Box>
            </Box>
            
        </ThemeProvider>
    );
};

export default OneColaborator;