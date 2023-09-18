import { Box } from '@mui/material';
import React from 'react';
import ServiceList from './SERVICE/ServiceList';
import TitleThird from './TitleThird';

const Service = ({theme, blogStyle}) => {

  const blogItemsStyle={
    display:"grid",
    gridRowGap: "1rem",
    '@media (min-width:600px)':{
      gridTemplateColumns: "100%",
      gridRowGap: "2rem",
    },
    '@media (min-width:900px)':{
      gridTemplateColumns: "repeat(2,50%)",
      justifyItems: "center",
      gridRowGap: "10px",
      gridColumnGap: "10px",
    },
    '@media (min-width:1200px)':{
      gridTemplateColumns: "repeat(3,33%)",
      justifyItems: "start",
      gridRowGap: "10px",
      gridColumnGap: "10px",
    }, 
    '@media (min-width:1920px)':{
      gridColumnGap: "2rem",
      gridRowGap: "2rem",
    }, 
  }


    return (
        <Box id="service" sx={{background:"#f4f2f2"}}>
          <Box sx={blogStyle}>
            <TitleThird theme={theme} firstCarTitle="OUR" orangeTitle="SPECIAL" secondCarTitle="SERVICES" />
            <Box sx={blogItemsStyle}>
              <ServiceList theme={theme} title="ACHIEVES" imageTitle="service-achieve"/>
              <ServiceList theme={theme} title="DESIGNER" imageTitle="service-designer"/>
              <ServiceList theme={theme} title="PERFECT DESIGN" imageTitle="service-design"/>
              <ServiceList theme={theme} title="PERFECT DESIGN" imageTitle="service-design1"/>
              <ServiceList theme={theme} title="ACHIEVES" imageTitle="service-achieve2"/>
              <ServiceList theme={theme} title="ACHIEVES" imageTitle="service-achieve3"/>
            </Box>
          </Box>
        </Box>
    );
};

export default Service;