import React from 'react';
import './Portfolio.css';
import arrow from '../../images/arrow.svg'

function Portfolio() {
    return (
        <div className='portfolio'>
            <div className='portfolio__wrapper'>
                <h2 className='portfolio__title'>Портфолио</h2>
                <ul className='portfolio__lists'>
                    <li className='portfolio__list'>
                        <a rel="noopener noreferrer" target="_blank" href='https://how-to-learn-flame.vercel.app/' className='portfolio__link'>
                            <p className='portfolio__text'>Статичный сайт </p >
                            <img className='portfolio__arrow' src={arrow} alt='web' />
                        </a>
                    </li>
                    <li className='portfolio__list'>
                        <a rel="noopener noreferrer" target="_blank" href='https://russian-travel-ionh.vercel.app/' className='portfolio__link'>
                            <p className='portfolio__text'>Адаптивный сайт </p >
                            <img className='portfolio__arrow' src={arrow} alt='web' />
                        </a>
                    </li>

                    <li className='portfolio__list'>
                        <a rel="noopener noreferrer" target="_blank" href='https://react-mesto-auth-ebon.vercel.app/' className='portfolio__link'>
                            <p className='portfolio__text'>Одностраничное приложение </p >
                            <img className='portfolio__arrow' src={arrow} alt='web' />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Portfolio;
