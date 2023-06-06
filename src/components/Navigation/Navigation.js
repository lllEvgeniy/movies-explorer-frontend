import React, { useState } from 'react';
import './Navigation.css';
import account from "../../images/account.svg";
import { Link } from "react-router-dom";



function Navigation(props) {
    const [isOpenBurger, setOpenBurger] = useState(false)

    function handleOpenMenu() {

        if (!isOpenBurger) {
            setOpenBurger(true)
        } else { setOpenBurger(false) }
    }


    if (!props.loggedIn) {
        return <div className='navigation'>
            <div className='navigation__btn'>
                <Link to="/signup" className='navigation__signup' >Регистрация</Link>
                <Link to="/signin" className='navigation__signin' >Войти</Link>
            </div>

        </div>;
    }
    return <div className='navigation navigation_loggedin'>

        <div className='navigation__wrapper'>
            <div className='navigation__link'>
                <Link className='navigation__films' to="/movies">Фильмы</Link>
                <Link className='navigation__saved-films' to="/saved-movies">Сохранённые фильмы</Link>
            </div>
            <Link to='/profile' className='navigation__account'><img src={account} alt="Символ человека" /> Аккаунт</Link>
        </div>
        <div onClick={handleOpenMenu} className='navigation__burgerbtn'>
            <div className={`navigation__burger ${isOpenBurger && 'navigation__burger_active'}`} ></div>
        </div>
        <ul className={`navigation__menu ${isOpenBurger && 'navigation__menu_active'}`} >
            <li className='navigation__nav'><Link className='navigation__burger-link' to="/" >Главная</Link></li>
            <li className='navigation__nav'><Link className='navigation__burger-link' to="/movies" >Фильмы</Link></li>
            <li className='navigation__nav'><Link className='navigation__burger-link' to="/saved-movies">Сохранённые фильмы</Link></li>
            <li className='navigation__nav'> <Link to='/profile' className='navigation__account'><img src={account} alt="Символ человека" /> Аккаунт</Link></li>
        </ul>
    </div >;

}


export default Navigation;