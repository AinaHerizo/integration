import { ThemeProvider } from '@emotion/react';
import { Typography, Box } from '@mui/material';
import React from 'react';

const OneColaborator = ({theme, workingHours, designerName, isLast }) => {

    const box1Style = {
        width: "100%",
        display: "grid",
        gridTemplateColumns: "40% 10% 50%",
        alignItems: "center",
        
        '@media (max-width: 1440px)': {
            gridTemplateColumns: "auto 10% auto",
            padding: "20px 0",
        },
        '@media (max-width: 600px)': {
            gridTemplateColumns: "100%",
            padding: "20px 0",
        },
    };

    const box2Style = {
        color: "white",
        textAlign: "end",
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
                    <Typography variant="h4"
                    sx={{
                        '@media (min-width: 1025px) and (max-width: 1280px)': {
                        fontSize:"20px",
                        },
                    }}>
                        {workingHours}
                    </Typography>
                    <Typography variant='h5'
                    sx={{
                        color:"#fff",
                        paddingBottom:"30px",
                        '@media (min-width: 1025px) and (max-width: 1280px)': {
                            fontSize:"18px",
                        },
                    }}>
                        {designerName}
                    </Typography>
                </Box>
                <Box className="iconBox">
                    <img className="iconAbout" src="./image/icon-about.png" alt="icon" />
                </Box>
                <Box
                 sx={{
                    '@media (max-width: 1280px)': {
                        color:"#fff",
                        marginLeft:"20px",
                      },
                      '@media (max-width: 1024px)': {
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