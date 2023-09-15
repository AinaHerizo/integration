import { Box, ThemeProvider, Typography } from '@mui/material';
import React from 'react';

const BlogTitle = ({theme}) => {
    return (
        <ThemeProvider theme={theme}>
            <Box>
                <Typography variant='h3'>OUR <span style={{ color: theme.palette.primary.main }}>SPECIAL</span> SERVICES</Typography>
            </Box>
        </ThemeProvider>
    );
};

export default BlogTitle;