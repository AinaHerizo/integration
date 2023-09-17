import React from 'react';
import Menu from './HEADER/Menu';
import Welcome from './HEADER/Welcome';
import { Box } from '@mui/material';

const Header = ({theme}) => {
    return (
        <Box
            sx={{
                color:"#fff",
                backgroundImage: `url(${process.env.PUBLIC_URL}/image/header-bg.jpg)`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: 'fit-content',
                paddingBottom:"50px",
                margin:"0 auto",
            }}
            id='home'>
            <Menu theme={theme}/>
            <Welcome theme={theme} />
        </Box>
    );
};

export default Header;