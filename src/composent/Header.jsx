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
                paddingTop:"0",
                paddingBottom:"50px",
                paddingLeft: "2rem",
                paddingRight: "2rem",
                margin:"0 auto",
            }}
            id='home'>
            <Menu theme={theme}/>
            <Welcome theme={theme} />
        </Box>
    );
};

export default Header;