import { Box } from '@mui/material';
import React from 'react';
import TitleThird from './TitleThird';
import Tarif from './PRICE/Tarif';

const Price = ({theme, priceStyle}) => {

    const priceBoxStyle={
        display:"grid",
        gridTemplateColumns: "100%",
        gridGap: "10px",
        '@media (min-width:600px)':{
            justifyItems: "center",
          },
        '@media (min-width:1200px)':{
            gridTemplateColumns: "repeat(3,30%)",
            gridGap: "10px",
        },
        '@media (min-width:1920px)':{
            gridGap: "75px",
        },
    }

    return (
        <Box  sx={{background:"#f4f2f2"}}>
            <Box id="price" sx={priceStyle}>
                <TitleThird theme={theme} firstCarTitle="OUR" orangeTitle="DESIGINS" secondCarTitle="PACKAGE"/>
                <Box  sx={priceBoxStyle}>
                    <Tarif imageTitle="price-icon1" tarifTitle="DESIGNER NAME" nickTitle="GRAPHIC DESIGNER" price="50" theme={theme}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus placeat vitae nostrum omnis eveniet, blanditiis ab dolores, officiis similique deserunt recusandae inventore quae ullam est, beatae autem dolore animi error.</Tarif> 
                    <Tarif imageTitle="price-icon2" tarifTitle="DESIGNER NAME" nickTitle="GRAPHIC DESIGNER" price="500" theme={theme} moyen>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus placeat vitae nostrum omnis eveniet, blanditiis ab dolores, officiis similique deserunt recusandae inventore quae ullam est, beatae autem dolore animi error.</Tarif>
                    <Tarif imageTitle="price-icon3" tarifTitle="DESIGNER NAME" nickTitle="GRAPHIC DESIGNER" price="1000" theme={theme}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus placeat vitae nostrum omnis eveniet, blanditiis ab dolores, officiis similique deserunt recusandae inventore quae ullam est, beatae autem dolore animi error.</Tarif>
                </Box>
            </Box>
        </Box>
    );
};

export default Price;