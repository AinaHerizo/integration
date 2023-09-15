import { Box, ThemeProvider, Typography } from '@mui/material';
import React from 'react';

const Introduction = ({theme}) => {
    return (
        <ThemeProvider theme={theme}>
            <Box>
                <Typography variant="h3">ABOUT <span style={{ color: theme.palette.primary.main }}>CREATIVE</span> AGENCY</Typography>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus facilis quo porro corporis quasi, consequuntur aliquid, error ullam iure ducimus magni, commodi perferendis aliquam obcaecati aut animi dignissimos? Ut reprehenderit quos mollitia alias. Ex veritatis consectetur minus voluptates consequuntur tenetur ut ducimus natus, adipisci asperiores, molestias suscipit labore libero accusantium? Voluptatem natus repudiandae corporis quidem earum omnis odio harum neque ducimus laborum quos, ex vitae eaque in maxime alias soluta nihil suscipit officiis quae iusto officia. Quam iure aliquid eos blanditiis amet porro! Sint maiores eum dolor veniam perferendis necessitatibus iure mollitia earum qui, sit nam, ratione distinctio obcaecati?</p>
            </Box>
        </ThemeProvider>
    );
};

export default Introduction;