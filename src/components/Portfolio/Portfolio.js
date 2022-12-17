import React from 'react';
import './Portfolio.css';

function Portfolio() {
    return (
        <div className='portfolio'>
            <div className='portfolio__wrapper'>
            <h2 className='portfolio__title'>Портфолио</h2>
            <ul className='portfolio__lists'>
                <li className='portfolio__list'>
                    <a href='https://how-to-learn-flame.vercel.app/' className='portfolio__link'>
                        <p className='portfolio__text'>Статичный сайт </p >
                        <p className='portfolio__arrow'>&#129125;</p>
                    </a>
                </li>
                <li className='portfolio__list'>
                    <a href='https://russian-travel-ionh.vercel.app/' className='portfolio__link'>
                        <p className='portfolio__text'>Адаптивный сайт </p >
                        <p className='portfolio__arrow'>&#129125;</p>
                    </a>
                </li>

                <li className='portfolio__list'>
                    <a href='https://react-mesto-auth-ebon.vercel.app/' className='portfolio__link'>
                        <p className='portfolio__text'>Одностраничное приложение </p >
                        <p className='portfolio__arrow'>&#129125;</p>
                    </a>
                </li>
            </ul>
            </div>
        </div>
    );
}

export default Portfolio;
