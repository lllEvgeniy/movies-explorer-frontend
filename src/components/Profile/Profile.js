import React from "react";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import './Profile.css';
import Header from '../Header/Header'
import Navigation from '../Navigation/Navigation'
import { CurrentUserContext } from "../../contexts/CurrentUserContext";


function Profile(props) {
    const currentUser = useContext(CurrentUserContext);

    const [email, setEmail] = useState(currentUser.email);
    const [name, setName] = useState(currentUser.name);
    const [emailDirty, setEmailDirty] = useState(false);
    const [nameDirty, setNameDirty] = useState(false);
    const [emailError, setEmailError] = useState('Email не может быть пустым');
    const [nameError, setNameError] = useState('Name не может быть пустым');
    const [formValid, setFormValid] = useState(true)

    useEffect(() => {
        if (emailError || nameError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, nameError])

const emailHandler = (e) => {
    setEmail(e.target.value)
    const re = /^\S+@\S+\.\S+$/
    if (!re.test(String(e.target.value).toLowerCase())) {
        setEmailError('Некорhектное поле email')
    } else {
        setEmailError('')
    }
}

const nameHandler = (e) => {
    setName(e.target.value)
    const re = /^[-а-яА-ЯёЁa-zA-Z\s]+$/
    if (!re.test(String(e.target.value).toLowerCase())) {
        setNameError('Некорhектное поле name')
    } else {
        setNameError('')
    }
}

const blurHandler = (e) => {
    switch (e.target.name) {
        case 'email':
            setEmailDirty(true)
            break;
        case 'password':
            setNameDirty(true)
            break;
        default:
    }
}


function updateUser(e) {
    e.preventDefault();
    props.handleUpdateUser(name, email)
}

function signOut() {
    localStorage.removeItem('jwt');
    props.handLeloggedIn()
  }

return (
    <div className='profile'>
        <Header>
            < Navigation loggedIn={props.loggedIn} />
        </Header>
        <h2 className='profile__title'>Привет, Виталий!</h2>
        <div className='profile__name'>
            <p className='profile__change'>Имя</p>
            {(nameDirty && nameError) && <span className='register__input-error'>{nameError}</span>}
            <input onBlur={e => blurHandler(e)} onChange={e => nameHandler(e)} type="text" value={name || ""} className='profile__change-name' />

        </div>
        <div className='profile__email'>
            <p className='profile__change'>E-mail</p>
            {(emailDirty && emailError) && <span className='register__input-error'>{emailError}</span>}
            <input onBlur={e => blurHandler(e)} onChange={e => emailHandler(e)} type="text" value={email || ""} className='profile__change-email' />
        </div>
        <button onClick={updateUser} disabled={!formValid} className={`profile__edit ${formValid && 'profile__edit_active'}`}>Редактировать</button>
        <Link to='/' onClick={signOut} className='profile__sign-out'>Выйти из аккаунта</Link>
    </div>
);
}

export default Profile;
