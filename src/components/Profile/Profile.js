import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './Profile.css';
import Header from '../Header/Header'
import Navigation from '../Navigation/Navigation'



function Profile(props) {
    const [email, setEmail] = useState('pochta@yandex.ru');
    const [name, setName] = useState('Виталий');


    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleChangeName(e) {
        setName(e.target.value);
    }


    return (
        <div className='profile'>
            <Header>
                < Navigation loggedIn={props.loggedIn}/>
            </Header>
            <h2 className='profile__title'>Привет, Виталий!</h2>
            <div className='profile__name'>
                <p className='profile__change'>Имя</p>
                <input onChange={handleChangeName} type="text" value={name || ""} className='profile__change-name' />

            </div>
            <div className='profile__email'>
                <p className='profile__change'>E-mail</p>
                <input onChange={handleChangeEmail} type="text" value={email || ""} className='profile__change-email' />
            </div>
            <p className='profile__edit'>Редактировать</p>
            <Link to='/' className='profile__sign-out'>Выйти из аккаунта</Link>
        </div>
    );
}

export default Profile;
