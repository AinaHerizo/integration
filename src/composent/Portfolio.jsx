import { Box } from '@mui/material';
import React from 'react';
import TitleThird from './TitleThird';
import Project from './PORTOFOLIO/Project';



const Team = ({theme, portfolioStyle}) => {

    // STYLE
    const listProjectStyle ={
        '@media (min-width:1920px)':{
            display: "grid",
            alignItems: "center",
            gridTemplateColumns: "75% 25%",
          },
    }

    return (
        <Box id='portfolio' sx={portfolioStyle}>
            <TitleThird theme={theme} firstCarTitle="LATEST" orangeTitle="DESIGN" secondCarTitle="BLOG" />
            <Box sx={listProjectStyle}>
                <Box>
                    <Project theme={theme} titleProject="DESIGNED AND BUILT WITH CARE" thumbnailProject="service1"/>
                    <Project theme={theme} titleProject="DESIGNED AND BUILT WITH CARE" thumbnailProject="service2"/>
                    <Project theme={theme} titleProject="DESIGNED AND BUILT WITH CARE" thumbnailProject="service3"/>
                </Box>
                <Box>
                    <Project theme={theme} titleProject="DESIGNED AND BUILT WITH CARE" thumbnailProject="service4" isLast/>
                </Box>
            </Box>
        </Box>
    );
};

export default Team;