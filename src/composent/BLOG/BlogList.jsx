import { Box, Card, CardContent, ThemeProvider, Typography } from '@mui/material';
import React from 'react';

const BlogList = ({theme, title, imageTitle}) => {
    return (
        <ThemeProvider theme={theme}>
            <Card>
                <CardContent>
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

export default BlogList;