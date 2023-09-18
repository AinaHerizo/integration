import { Box  } from '@mui/material';
import React from 'react';
import Introduction from './ABOUT/Introduction';
import Colaborator from './ABOUT/Colaborator';

const About = ({theme}) => {
    return (
        <Box id='about'
        sx={{
            height: 'fit-content',
            display:"grid",
            gridTemplateColumns: "100%",
            alignItems:"center",
            margin:"0 auto",
            paddingLeft: "2rem",
            paddingRight: "2rem",
            '@media (min-width:600px)':{
                maxWidth:"600px",
                gridTemplateColumns: "100%",
            },
            '@media (min-width:900px)':{
                maxWidth:"900px",
            },
            '@media (min-width:1200px)':{
                maxWidth:"1200px",
                gridTemplateColumns: "40% 60%",
            },
            '@media (min-width:1920px)':{
                maxWidth:"1920px",
            },
            '@media (min-width:2560px)':{
                maxWidth:"2560px",
            },
        }}>
            <Introduction theme={theme}/>
            <Colaborator theme={theme}/>
        </Box>
    );
};

export default About;