import React from 'react';
import './Promo.css';
import web from '../../images/web.png'

function Promo() {
        return (
            <div className='promo'>
                <div className='promo__wrapper'>
                    <h1 className='promo__title'>Учебный проект студента факультета Веб&#8209;разработки.</h1>
                    <p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                    <a href='#aboutproject' className='promo__button'>Узнать больше</a>
                    <img className='promo__img' src={web} alt='web' />
                </div>

            </div>

        );
    }

export default Promo;