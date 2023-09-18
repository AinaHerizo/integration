import { Box } from '@mui/material';
import React from 'react';
import TitleThird from './TitleThird';
import Tarif from './PRICE/Tarif';

const Price = ({theme, priceStyle}) => {
    return (
        <Box id="price" sx={priceStyle}>
            <TitleThird theme={theme} firstCarTitle="OUR" orangeTitle="DESIGINS" secondCarTitle="PACKAGE"/>
            <Box>
                <Tarif imageTitle="price-icon1" tarifTitle="DESIGNER NAME" nickTitle="GRAPHIC DESIGNER" price="50" theme={theme}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus placeat vitae nostrum omnis eveniet, blanditiis ab dolores, officiis similique deserunt recusandae inventore quae ullam est, beatae autem dolore animi error.</Tarif> 
                <Tarif imageTitle="price-icon2" tarifTitle="DESIGNER NAME" nickTitle="GRAPHIC DESIGNER" price="50" theme={theme}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus placeat vitae nostrum omnis eveniet, blanditiis ab dolores, officiis similique deserunt recusandae inventore quae ullam est, beatae autem dolore animi error.</Tarif>
                <Tarif imageTitle="price-icon3" tarifTitle="DESIGNER NAME" nickTitle="GRAPHIC DESIGNER" price="50" theme={theme}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus placeat vitae nostrum omnis eveniet, blanditiis ab dolores, officiis similique deserunt recusandae inventore quae ullam est, beatae autem dolore animi error.</Tarif>
            </Box>
        </Box>
    );
};

export default Price;