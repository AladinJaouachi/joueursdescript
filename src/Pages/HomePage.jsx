import React from 'react';
import HeadWeb from '../componenets/HeadWeb';
import Parag from '../componenets/Parag';
import CwaretProjet from '../componenets/CwaretProjet';
import FooterWeb from "../componenets/FooterWeb"

const HomePage = ({Players}) => {
    return (
        <>
            <HeadWeb/>
            <Parag/>
            <CwaretProjet Players={Players}/>
            <FooterWeb/>
        </>
    );
}

export default HomePage;
