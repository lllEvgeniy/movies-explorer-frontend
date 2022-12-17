import React from 'react';
import './AboutProject.css';


function AboutProject() {
    return (
        <div id='aboutproject' className='about-project'>
            <div className='about-project__wrapper'>
                <h2 className='about-project__title'>О проекте</h2>
                <div className='about-project__general' >
                    <div className='about-project__form'>
                        <h3 className='about-project__subtitle'>Дипломный проект включал 5 этапов</h3>
                        <p className='about-project__description'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    </div>
                    <div className='about-project__form'>
                        <h3 className='about-project__subtitle'>На выполнение диплома ушло 5 недель</h3>
                        <p className='about-project__description'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                    </div>
                </div>
                <div className='about-project__band'>
                    <div className='about-project__week'>1 неделя</div>
                    <div className='about-project__week'>4 недели</div>
                </div>
                <div className='about-project__band'>
                    <p className='about-project__do'>Back-end</p>
                    <p className='about-project__do'>Front-end</p>
                </div>
            </div>
        </div>
    );
}

export default AboutProject;
