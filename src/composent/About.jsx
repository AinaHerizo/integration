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
            gridTemplateColumns: "40% 60%",
            alignItems:"center",
            '@media (min-width: 1025px) and (max-width: 1280px)': {
                gridTemplateColumns: "40% 60%",
                padding:"0px 90px",
            },
            '@media (max-width: 1024px)': {
                gridTemplateColumns: "100%",
                padding:"30px 50px",
            },
            '@media (max-width: 600px)': {
                padding:"30px 30px",
            },
        }}>
            <Introduction theme={theme}/>
            <Colaborator theme={theme}/>
        </Box>
    );
};

export default About;