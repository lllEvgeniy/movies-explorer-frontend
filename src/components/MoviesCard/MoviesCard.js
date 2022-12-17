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
            <div className="moviecard__information">
                <h2 className="moviecard__title">{movie.title}</h2>
                <p className="movie-card__duration">{movie.duration}</p>
                {location.pathname === '/movies' ?
                    <button className={`moviecard__save ${saveMovie ? 'moviecard__save_active' : ''}`} type='button' onClick={handleSaveMovie} />
                    :
                    <button className='moviecard__remove' type='button' />
                }

            </div>
            <img className="moviecard__img" src={movie.image} alt={movie.title} />
        </div>
    )
}

export default MoviesCard;