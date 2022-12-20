import React from 'react';
import './Header.css';
import logo from "../../images/logo.svg";
import { Link } from 'react-router-dom';



function Header(props) {
    return (
        <header className="header">
            <div className="header__wrapper">
            <Link to='/' className="header__logo" href="!#">
                <img className="header__img" src={logo} alt="Логотип" />
            </Link>
            {props.children}
            </div>
        </header>
    );
}

export default Header;
