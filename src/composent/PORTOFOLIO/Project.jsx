import { Box, ThemeProvider, Typography } from '@mui/material';
import React from 'react';

const Project = ({theme, titleProject, thumbnailProject, isLast}) => {
    
    const projectCardStyle ={
        textAlign: "center",
        '@media (min-width:900px)':{
            textAlign: "inherit",
            display:"grid",
            gridTemplateColumns:"33% 67%",
          },
          '@media (min-width:1200px)':{
            position:"relative", 
            textAlign: "inherit",
            display:"grid",
            gridTemplateColumns:isLast ? "100%" : "40% 60%",
            width:isLast ? "fit-content" : null,
          },
          '@media (min-width:1920px)':{
            gridTemplateColumns:"32% 66%",
            },
            '@media (min-width:2560px)':{
            gridTemplateColumns:"24% 74%",
            },
        }

    const projectDescriptionStyle ={
        '@media (min-width:1200px)':{
            position:"absolute",
            bottom:"5px",
            color: "#fff",
            padding: "0 10px",
          },
    }
    
    const titleStyle = {
        color:theme.palette.secondary.main,
        '@media (min-width:1200px)':{
            color:isLast ? theme.palette.text.tierce:theme.palette.secondary.main,
            },
        }
    
    return (
        <ThemeProvider theme={theme}>
        <Box sx={projectCardStyle}>
            <Box>
                <img src={"./image/"+thumbnailProject+".jpg"} alt={thumbnailProject} />
            </Box>
            <Box sx={isLast ? projectDescriptionStyle : null}>
                <Typography variant='h6' sx={titleStyle}>{titleProject}</Typography>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste saepe aperiam dolorem delectus porro repudiandae doloribus labore nostrum! Corporis blanditiis, dignissimos et doloremque non reprehenderit quo fugit neque omnis perspiciatis.</p>
            </Box>
        </Box>
        </ThemeProvider>
    );
};

export default Project;