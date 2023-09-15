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
            gridTemplateColumns: '40% 60%',
            padding:"0 200px",
            alignItems:"center",
        }}>
            <Introduction theme={theme}/>
            <Colaborator theme={theme}/>
        </Box>
    );
};

export default About;