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
    const [btnUpdate, setBtnUpdate] = useState(false)


    useEffect(() => {
        if (nameError.length > 0) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }


    }, [name])

    useEffect(() => {
        if (emailError.length > 0) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }


    }, [email])



    const emailHandler = (e) => {
        setEmail(e.target.value)
        props.setDataSave(false)
        setBtnUpdate(true)
        const re = /^\S+@\S+\.\S+$/
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорhектное поле email')
        } else {
            setEmailError('')
        }
        if (e.target.value === currentUser.email && name === currentUser.name) {
            setBtnUpdate(false)
        }
    }

    const nameHandler = (e) => {
        setName(e.target.value)
        props.setDataSave(false)
        setBtnUpdate(true)
        const re = /^[-а-яА-ЯёЁa-zA-Z\s]+$/
        if (!re.test(String(e.target.value).toLowerCase())) {
            setNameError('Некорhектное поле name')
        } else {
            setNameError('')
        }
        if (e.target.value === currentUser.name && email === currentUser.email) {
            setBtnUpdate(false)
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break;
            case 'name':
                setNameDirty(true)
                break;
            default:
        }
    }


    function updateUser(e) {
        e.preventDefault();
        setBtnUpdate(false)
        props.handleUpdateUser(name, email)
    }

    function signOut() {
        localStorage.removeItem('requestText');
        localStorage.removeItem('checkbox');
        localStorage.removeItem('savedMovies');
        localStorage.removeItem('searchMovies');
        localStorage.removeItem('movies');
        localStorage.removeItem('jwt');
        props.handLeloggedIn()
    }

    return (
        <div className='profile'>
            <Header>
                < Navigation loggedIn={props.loggedIn} />
            </Header>
            <div className="profile__wrapper">
                <h2 className='profile__title'>Привет, {name}</h2>
                <div className='profile__name'>
                    <p className='profile__change'>Имя</p>
                    {(nameDirty && nameError) && <span className='register__input-error'>{nameError}</span>}
                    <input onBlur={e => blurHandler(e)} onChange={e => nameHandler(e)} name='name' type="text" value={name || ""} className='profile__change-name' />

                </div>
                <div className='profile__email'>
                    <p className='profile__change'>E-mail</p>
                    {(emailDirty && emailError) && <span className='register__input-error'>{emailError}</span>}
                    <input name="email" onBlur={e => blurHandler(e)} onChange={e => emailHandler(e)} type="text" value={email || ""} className='profile__change-email' />
                </div>
                <button onClick={updateUser} disabled={!formValid || !btnUpdate} className={`profile__edit ${formValid && btnUpdate && 'profile__edit_active'}`}>Редактировать</button>
                {(props.dataSave) && <span className='register__saved-data'>Данные успешно сохранены!</span>}
                <Link to='/' onClick={signOut} className='profile__sign-out'>Выйти из аккаунта</Link>
            </div>
        </div>
    );
}

export default Profile;
