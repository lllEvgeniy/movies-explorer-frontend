import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard({ movie }) {

    const [saveMovie, setSaveMovie] = useState(false);

    const handleSaveMovie = () => {
        setSaveMovie(!saveMovie);
    }

    const location = useLocation();

    return (
        <div className='moviescard'>
            <div className="moviescard__information">
                <h2 className="moviescard__title">{movie.title}</h2>
                <p className="moviescard__duration">{movie.duration}</p>
                {location.pathname === '/movies' ?
                    <button className={`moviescard__save ${saveMovie ? 'moviescard__save_active' : ''}`} type='button' onClick={handleSaveMovie} />
                    :
                    <button className='moviescard__remove' type='button' />
                }

            </div>
            <img className="moviescard__img" src={movie.image} alt={movie.title} />
        </div>
    )
}

export default MoviesCard;