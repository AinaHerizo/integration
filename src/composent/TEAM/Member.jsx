import { Box, Typography } from '@mui/material';
import React from 'react';

const Member = ({nameOfMember, assignement, children, imageTitle}) => {

    const memberCardStyle = {
        textAlign: "center",
        '&>p':{
            marginTop:"0",
        },
        '@media (min-width:900px)':{
            textAlign: "inherit",
            display: "grid",
            gridTemplateColumns: "40% 60%",
            alignItems: "center",
        },
        '@media (min-width:1920px)':{
            textAlign: "center",
            gridTemplateColumns: "100%",
            width: "min-content",
        },
        '@media (min-width:2560px)':{
        },
    }


    return (
        <Box sx={memberCardStyle}>
            <Box><img src={"./image/"+imageTitle+".jpg"} alt="un de nos membre"/></Box>
            <Box>
                <Typography variant='h5'>{nameOfMember}</Typography>
                <Typography variant='h6'>{assignement}</Typography>
                <p>{children}</p>
            </Box>
        </Box>
    );
};

export default Member;