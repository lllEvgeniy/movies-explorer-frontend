
import React from 'react';
import './Register.css';
import logo from "../../images/logo.png";
import { Link } from 'react-router-dom';


function Register() {
    return (
        <div className="register">
            <div className='register__wrapper'>
            <Link to='/' className="register__logo" href="!#">
                    <img className="register__img" src={logo} alt="Логотип" />
                </Link>
                <h2 className="register__title">Добро пожаловать!</h2>
                <form className="register__form"  >
                    <p className="register__preinput" >Имя</p>
                    <input className="register__username" required id="email" name="name" type="text" />
                    <p className="register__preinput" >E-mail</p>
                    <input className="register__useremail" required id="email" name="email" type="text" />
                    <p className="register__preinput" >Пароль</p>
                    <input className="register__password" required id="password" name="password" type="password" autoComplete="on" />
                    <p className='register__error'>Что-то пошло не так...</p>
                    <button type="submit" className="register__btn">Зарегистрироваться</button>

                </form>
                <p className='register__already-registered'>Уже зарегистрированы? <Link to="/signin" className="register__signin">Войти</Link></p>
            </div>
        </div>
    );
}

export default Register;
