import { Box } from '@mui/material';
import React from 'react';
import TitleThird from './TitleThird';
import TypeContact from './CONTACT/TypeContact';

const Contact = ({theme, contactStyle}) => {

    // STYLES
    const cardListStyle = {
        textAlign:"center",
        '@media (min-width:600px)':{
            display:"grid",
            padding: "0 55px",
            gridTemplateColumns: "50% 50%",
        },
        '@media (min-width:900px)':{
            textAlign:"left",
            paddingLeft:"90px",
        },
        '@media (min-width:1200px)':{
            padding: "0",
            gridTemplateColumns: "100%",
            marginTop:"20px",
        },
    }
    const imageStyles = {
        width: "fit-content",
        display:"none",
        '@media (min-width:1200px)':{
            display:"inherit",
            position:"relative",
            top: "-50px",
            right:"0",
            '&>img':{
                width: "93%",
            }
        },
        '@media (min-width:1920px)':{
            right:"-13.5rem",
            '&>img':{
                width: "100%",
            }
        },
    }

    return (
        <Box id="contact" sx={contactStyle}>
            <Box sx={{position:"relative"}}>
                <TitleThird theme={theme} firstCarTitle="HOW" orangeTitle="FIND US" isLastOrange/>
                <Box sx={cardListStyle}>
                    <TypeContact theme={theme} imageRepresentative="adress-icon" titre="ADDRESS" infos={["lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod tempor."]}/>
                    <TypeContact theme={theme} imageRepresentative="phone-icon" titre="CALL US" infos={["+123 4567 8900" , "+123 4567 8900"]}/>
                    <TypeContact theme={theme} imageRepresentative="email-icon" titre="EMAIL" infos={["free@psdfreebies.com"]}/>
                    <TypeContact theme={theme} imageRepresentative="website-icon" titre="WEBSITE" infos={["www.psdfreebies.com"]}/>
                </Box>
            </Box>
            <Box sx={imageStyles}>
                <img src="./image/contact.jpg" alt="" />
            </Box>
        </Box>
    );
};

export default Contact;