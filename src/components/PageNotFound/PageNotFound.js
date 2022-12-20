
import React from 'react';
import './PageNotFound.css';
import { useNavigate } from "react-router-dom";



function PageNotFound() {
    const navigate = useNavigate()
    const goBack = () => navigate(-1)

    return (
        <div className='page-not-found'>
            <div className='page-not-found__wrapper'>
                <h2 className='page-not-found__title'>404</h2>
                <p className='page-not-found__subtitle'>Страница не найдена</p>
            </div>
            <p onClick={goBack} className='page-not-found__back'>Назад</p>
        </div>
    );
}

export default PageNotFound;
