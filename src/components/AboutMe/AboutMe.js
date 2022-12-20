import React from 'react';
import './AboutMe.css';
import photo from "../../images/photo.jpg";

function AboutMe() {
    return (
        <div className='about-me'>
            <div className='about-me__wrapper'>
                <h2 className='about-me__title'>Студент</h2>
                <h3 className='about-me__subtitle'>Евгений</h3>
                <p className='about-me__work'>Фронтенд-разработчик, 27 лет</p>
                <p className='about-me__description'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                    и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                <a href='https://github.com/lllEvgeniy' className='about-me__github'>Github</a>
                <img src={photo} className='about-me__photo' alt='фото' />
            </div>
        </div>

    );
}

export default AboutMe;
