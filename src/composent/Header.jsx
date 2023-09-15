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
                width: '100%',
                height: 'fit-content',
                paddingBottom:"50px",
                paddingLeft:'200px',
                '@media (max-width:1280px)':{
                    paddingLeft:'90px'
                },
                '@media (max-width:1024px)':{
                    paddingLeft:'50px'
                },
                '@media (min-width:960px)':{
                    paddingBottom:"200px!important",
                }, 
                '@media (max-width:960px)':{
                    paddingLeft:'30px!important',
                },  
                '@media (max-width:600px)':{
                    paddingRight:'30px!important',  
                },  
            }}
            id='home'>
            <Menu theme={theme}/>
            <Welcome theme={theme}/>
        </Box>
    );
};

export default Header;