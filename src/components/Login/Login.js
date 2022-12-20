
import React from 'react';
import './Login.css';
import logo from "../../images/logo.svg";
import { Link } from 'react-router-dom';


function Login() {
    return (
        <div className='login'>
            <div className='login__wrapper'>
                <Link to='/' className="login__logo" href="!#">
                    <img className="login__img" src={logo} alt="Логотип" />
                </Link>
                <h2 className="login__title">Рады видеть!</h2>
                <form className="login__form">
                    <p className="login__preinput" >E-mail</p>
                    <input className="login__useremail" required id="email" name="email" type="text" />
                    <p className="login__preinput" >Пароль</p>
                    <input className="login__password" required id="password" name="password" type="password" autoComplete="on" />
                    <p className='login__error'>Что-то пошло не так...</p>
                    <button type="submit" className="login__btn">Войти</button>

                </form>
                <p className='login__already-registered'>Ещё не зарегистрированы? <Link to="/signup" className="login__signup">Регистрация</Link></p>
            </div>
        </div>
    );
}

export default Login;
