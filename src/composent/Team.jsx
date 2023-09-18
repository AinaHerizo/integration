import { Box, ThemeProvider } from '@mui/material';
import React from 'react';
import TitleThird from './TitleThird';
import Member from './TEAM/Member';

const Team = ({theme, teamStyle}) => {

        const membersListStyle={
            display: "grid",
            gridTemplateColumns: "100%",
            gridRowGap: "20px",
            '@media (min-width:1920px)':{
                gridTemplateColumns: "repeat(3,33%)",
                gridColumnGap: "50px",
            },
            '@media (min-width:2560px)':{
            },
        }

    return (
        <ThemeProvider theme={theme}>
            <Box id='team' sx={{background:"#f4f2f2"}}>
                <Box sx={teamStyle}>
                    <TitleThird theme={theme} firstCarTitle="CREATIVE" orangeTitle="TEAM" secondCarTitle="MEMBERS" />
                    <Box sx={membersListStyle}>
                        <Member nameOfMember="DESIGNER NAME" assignement="GRAPHIC DESIGNER" imageTitle="team1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, dolorem distinctio. Laborum esse illum voluptatem iusto repudiandae eum corrupti perspiciatis officia voluptates sunt tenetur ratione, ad fugit excepturi iure unde.</Member>
                        <Member nameOfMember="DESIGNER NAME" assignement="GRAPHIC DESIGNER" imageTitle="team2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, dolorem distinctio. Laborum esse illum voluptatem iusto repudiandae eum corrupti perspiciatis officia voluptates sunt tenetur ratione, ad fugit excepturi iure unde.</Member>
                        <Member nameOfMember="DESIGNER NAME" assignement="GRAPHIC DESIGNER" imageTitle="team3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, dolorem distinctio. Laborum esse illum voluptatem iusto repudiandae eum corrupti perspiciatis officia voluptates sunt tenetur ratione, ad fugit excepturi iure unde.</Member>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default Team;