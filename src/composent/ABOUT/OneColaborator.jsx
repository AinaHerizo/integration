import { ThemeProvider } from '@emotion/react';
import { Typography, Box } from '@mui/material';
import React from 'react';

const OneColaborator = ({theme, workingHours, designerName }) => {
    return (
        <ThemeProvider theme={theme}>
            <Box 
            sx={{
                width:"100%",
                display:"grid",
                gridTemplateColumns:"20% 30% 50%",
                justifyContent: "center",
                marginTop:"20px",
                marginLeft: "200px",
            }}
            >
                <Box
                sx={{
                    textAlign:"end",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}>
                    <Typography variant="h4" sx={{color:"#fff",}}>{workingHours}</Typography>
                    <Typography variant='h5' sx={{borderBottom:"1px solid #fff", color:"#fff", paddingBottom:"30px"}}>{designerName}</Typography>
                </Box>
                <Box
                sx={{
                    display:"grid",
                    gridTemplateColumns:"10% 90%"
                }}
                >
                    <img src="./image/icon-about.png" alt="icon" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque sunt voluptate distinctio nemo aliquam mollitia quo est ratione minima fuga iure error labore, unde neque eaque cupiditate sequi. Quis dolorum quo nisi fuga dolorem iste quibusdam rerum, sed iusto aut voluptatem vel ad natus unde ex, aliquid, quasi saepe nam!
                    </p>
                </Box>
            </Box>
            
        </ThemeProvider>
    );
};

export default OneColaborator;