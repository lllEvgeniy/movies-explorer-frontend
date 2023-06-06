import React from 'react';
import './Techs.css';

function Techs() {
    return (
        <div className='techs'>
            <div className='techs__wrapper'>
                <h2 className='techs__title'>Технологии</h2>
                <h3 className='techs__subtitle'>7 технологий</h3>
                <p className='techs__description'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <ul className='techs__lists'>
                    <li className='techs__list'>html</li>
                    <li className='techs__list'>css</li>
                    <li className='techs__list'>js</li>
                    <li className='techs__list'>React</li>
                    <li className='techs__list'>Git</li>
                    <li className='techs__list'>Express.js</li>
                    <li className='techs__list'>mongoDB</li>
                </ul>
            </div>
        </div>
    );
}

export default Techs;
