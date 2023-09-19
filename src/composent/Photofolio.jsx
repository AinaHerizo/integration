import { Box } from '@mui/material';
import React from 'react';
import TitleThird from './TitleThird';

const Photofolio = ({theme}) => {

    // STYLES
    const exterieurBox = {
        display:"grid",
        gridTemplateColumns: "100%",
    }
    const boxLevelOne = {
        display:"grid",
        gridTemplateColumns: "50% 50%",
    }

    return (
        <Box sx={exterieurBox}>
            <Box sx={boxLevelOne}>
                <Box><img src="./image/work1.jpg" alt="" /></Box>
                <Box><img src="./image/work2.jpg" alt="" /></Box>
            </Box>
            <Box sx={boxLevelOne}>
                <Box sx={boxLevelOne}>
                    <Box><img src="./image/work3.jpg" alt="" /></Box>
                    <Box><TitleThird theme={theme} firstCarTitle="OUR" orangeTitle="PORTFOLIO" secondCarTitle="GALLERY"/></Box>
                </Box>
                <Box sx={boxLevelOne}>
                    <Box>
                        <Box><img src="./image/work4.jpg" alt="" /></Box>
                        <Box><img src="./image/work6.jpg" alt="" /></Box>
                    </Box>
                    <Box><img src="./image/work5.jpg" alt="" /></Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Photofolio;