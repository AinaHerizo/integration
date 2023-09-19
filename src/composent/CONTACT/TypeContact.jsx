import { Box, List, ListItem, ThemeProvider, Typography } from '@mui/material';
import React from 'react';

const TypeContact = ({theme, imageRepresentative, titre, infos}) => {

    // STYLES
    const cardStyle={
        marginBottom:"20px",
        ':last-child':{
            marginBottom:"0px",
        },
        '@media (min-width:900px)':{
            display:"grid",
            gridTemplateColumns: "20% 80%",
            ':nth-child(3)':{
                marginBottom:"0px",
            },
        },
        '@media (min-width:1200px)':{
            gridTemplateColumns: "20% 60%",
            ':nth-child(3)':{
                marginBottom:"20px",
            },
        },
        '@media (min-width:1920px)':{
            gridTemplateColumns: "12% 50%",
        },
    }
    const listItemStyle={
        justifyContent: "center",
        textAlign:"center",
        padding:"0",
        '@media (min-width:900px)':{
            justifyContent: "flex-start",
            textAlign:"left",
        },
    }

    return (
        <ThemeProvider theme={theme}>
        <Box sx={cardStyle}>
            <Box>
                <img src={"./image/"+imageRepresentative+".png"} alt="" />
            </Box>
            <Box>
                <Typography variant="h6">{titre}</Typography>
                <List>
                    {infos.map((info,index) => (
                        <ListItem key={index} sx={listItemStyle}>{info}</ListItem>
                    ))}
                </List>
            </Box>
        </Box>
        </ThemeProvider>
    );
};

export default TypeContact;