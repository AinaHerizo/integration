import { Box, Card, CardContent, ThemeProvider, Typography } from '@mui/material';
import React from 'react';

const ServiceList = ({theme, title, imageTitle}) => {


    const cardStyle={
        width: "100%",
        '@media (min-width:1200px)':{
            width: "100%",
            },
        '@media (min-width:1920px)':{
            width: "77%",
            }
        }

    return (
        <ThemeProvider theme={theme}>
            <Card sx={cardStyle}>
                <CardContent
                sx={{
                    display: "grid",
                    textAlign: "center",
                    gridRowGap: "0.5rem",
                }}
                
                
                >
                    <Box><img src={"./image/"+imageTitle+".png"} alt={"logo pour "+imageTitle} /></Box>
                    <Typography variant='h6'>
                        {title}
                    </Typography>
                    <Typography variant='body1'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae et officia sequi quis itaque perferendis doloremque error id praesentium voluptatum expedita vero maxime, animi minus dolores eum consectetur totam magni, dignissimos iste odit quos reprehenderit. Quas, odit. Vitae, fuga dolorem!
                    </Typography>
                </CardContent>
            </Card> 
        </ThemeProvider>
    );
};

export default ServiceList;