import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__wrapper'>
                <h3 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
                <div className='footer__container'>
                    <p className='footer__copy'>&copy; 2022</p>
                    <div className='footer__links'>
                        <a href='https://practicum.yandex.ru/' className='footer__link'>Яндекс.Практикум</a>
                        <a href='https://github.com/lllEvgeniy' className='footer__link'>Github</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
