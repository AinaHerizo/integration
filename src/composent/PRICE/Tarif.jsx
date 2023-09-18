import { Box, Button, Card, CardActions, CardContent, ThemeProvider, Typography } from '@mui/material';
import React from 'react';

const Tarif = ({imageTitle, tarifTitle, nickTitle, price, theme, children}) => {
    return (
        <ThemeProvider theme={theme}>
       <Card>
            <CardContent>
                <Box><img src={"./image/"+imageTitle+".png"} alt="representatio du tarif" /></Box>
                <Typography variant='h5'>{tarifTitle}</Typography>
                <Typography variant='h6'>{nickTitle}</Typography>
                <p>{children}</p>
                <Typography>${price}</Typography>
            </CardContent>
            <CardActions>
                <Button variant='contained' color='btnReadMore2' component="MuiButton2">READ MORE</Button>
            </CardActions>
       </Card>
       </ThemeProvider>
    );
};

export default Tarif;