import React, { useState, useEffect } from 'react';
import './Login.css';
import logo from "../../images/logo.svg";
import { Link } from 'react-router-dom';





function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [emailError, setEmailError] = useState('Email не может быть пустым');
    const [passwordError, setPasswordError] = useState('Password не может быть пустым');
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, passwordError])

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
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

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 2) {
            setPasswordError('Пароль должен быть более 2 символов')
        } else {
            setPasswordError('')
        }
    }

    function onLogin(e) {
        e.preventDefault();
        props.handleSubmit({ email, password})
    }

    return (
        <div className='login'>
            <div className='login__wrapper'>
                <Link to='/' className="login__logo" href="!#">
                    <img className="login__img" src={logo} alt="Логотип" />
                </Link>
                <h2 className="login__title">Рады видеть!</h2>
                <form onSubmit={onLogin} className="login__form">
                    <p className="login__preinput" >E-mail</p>
                    <input  onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)}  className="login__useremail" required id="email" name="email" type="text" />
                    {(emailDirty && emailError) && <span className='register__input-error'>{emailError}</span>}
                    <p className="login__preinput" >Пароль</p>
                    <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)}  className="login__password" required id="password" name="password" type="password" autoComplete="on" />
                    {(passwordDirty && passwordError) && <span className='register__input-error'>{passwordError}</span>}
                    <p className='login__error'>Что-то пошло не так...</p>
                    {props.loginError && <span className='register__btn-error'>{props.loginError}</span>}
                    <button disabled={!formValid} type="submit" className={`login__btn ${formValid && 'login__btn_active'}`}>Войти</button>
                </form>
                <p className='login__already-registered'>Ещё не зарегистрированы? <Link to="/signup" className="login__signup">Регистрация</Link></p>
            </div>
        </div>
    );
}

export default Login;