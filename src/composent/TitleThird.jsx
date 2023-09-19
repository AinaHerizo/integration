import { Box, Typography, ThemeProvider } from '@mui/material';
import React from 'react';

const TitleThird = ({theme, firstCarTitle, orangeTitle, secondCarTitle, isLastOrange}) => {

    const titleStyle ={
        '@media (min-width:600px)':{
            marginBottom:"16px",
          },
        '@media (min-width:1200px)':{
            display: "flex",
            alignItems: "flex-end",
            marginBottom:"0",
            '& > h3':{
                '& > span':{
                display: isLastOrange ? "block!important" : "inherit!important",
                }
            }
        },
        '& > h3':{
            width: isLastOrange ? "max-content" : "fit-content",
            '& > span':{
            color: theme.palette.primary.main,
            display:"contents",
            }
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Box sx={titleStyle}>
                <Typography variant='h3'>{firstCarTitle} <span>{orangeTitle} </span>{secondCarTitle}</Typography>
            </Box>
        </ThemeProvider>
    );
};

export default TitleThird;