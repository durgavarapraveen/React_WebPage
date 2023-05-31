import React from 'react';
import '../../App.css';
import Herosection from '../Herosection';
import Cards from '../Cards';
import Navbar from '../navbar'
import Fotter from '../Fotter';


function Home () {
    return (
        <>
            <Navbar />
            <Herosection />
            <Cards />
            <Fotter />
        </>
    )
}

export default Home;