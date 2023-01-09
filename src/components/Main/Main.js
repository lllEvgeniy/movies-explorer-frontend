
import React from 'react';
import './Main.css';
import Header from '../Header/Header'
import Promo from '../Promo/Promo'
import AboutProject from '../AboutProject/AboutProject'
import Techs from '../Techs/Techs'
import AboutMe from '../AboutMe/AboutMe'
import Portfolio from '../Portfolio/Portfolio'
import Footer from '../Footer/Footer'
import Navigation from '../Navigation/Navigation'

function Main(props) {
    return (
        <main className='main'>

            <Header>
                <Navigation loggedIn={props.loggedIn} />
            </Header>
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
            <Footer />
        </main>
    );
}

export default Main;