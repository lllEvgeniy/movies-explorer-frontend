
import React, { useState, useEffect } from 'react';
import './Register.css';
import logo from "../../images/logo.svg";
import { Link } from 'react-router-dom';


function Register(props) {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [nameDirty, setNameDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [emailError, setEmailError] = useState('Email не может быть пустым');
    const [nameError, setNameError] = useState('Name не может быть пустым');
    const [passwordError, setPasswordError] = useState('Password не может быть пустым');
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if (emailError || passwordError || nameError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, passwordError, nameError])

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break;
            case 'name':
                setNameDirty(true)
                break;
            case 'password':
                setPasswordDirty(true)
                break;

            default:
        }
    }

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

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 2) {
            setPasswordError('Пароль должен быть более 2 символов')
        } else {
            setPasswordError('')
        }
    }

    function onRegister(e) {
        e.preventDefault();
        props.handleSubmit({ email, password, name, })
    }


    return (
        <div className="register">
            <div className='register__wrapper'>
                <Link to='/' className="register__logo" href="!#">
                    <img className="register__img" src={logo} alt="Логотип" />
                </Link>
                <h2 className="register__title">Добро пожаловать!</h2>
                <form onSubmit={onRegister} className="register__form"  >
                    <p className="register__preinput" >Имя</p>
                    <input onChange={e => nameHandler(e)} value={name} onBlur={e => blurHandler(e)} className="register__username" required id="name" name="name" type="text" />
                    {(nameDirty && nameError) && <span className='register__input-error'>{nameError}</span>}
                    <p className="register__preinput" >E-mail</p>
                    <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} className="register__useremail" required id="email" name="email" type="text" />
                    {(emailDirty && emailError) && <span className='register__input-error'>{emailError}</span>}
                    <p className="register__preinput" >Пароль</p>
                    <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} className="register__password" required id="password" name="password" type="password" autoComplete="on" />
                    {(passwordDirty && passwordError) && <span className='register__input-error'>{passwordError}</span>}
                    <p className='register__error'>Что-то пошло не так...</p>
                    {props.registerError && <span className='register__btn-error'>{props.registerError}</span>}
                    <button disabled={!formValid} type="submit" className={`register__btn ${formValid && 'register__btn_active'}`}>Зарегистрироваться</button>
                </form>
                <p className='register__already-registered'>Уже зарегистрированы? <Link to="/signin" className="register__signin">Войти</Link></p>
            </div>
        </div>
    );
}

export default Register;
