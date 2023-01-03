import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard({ movie, handleSaveMovie, handleDeleteMovie }) {

    const [saveMovie, setSaveMovie] = useState(false);

    const location = useLocation();


    useEffect(() => {
        const savedMovies = JSON.parse(localStorage.getItem('savedMovies')) || []
        savedMovies.forEach(e => {
            if (e.movieId === movie.id || movie.movieId) {
                setSaveMovie(!saveMovie)
            }
        });
    }, [], [location.pathname])



    function handleDelMovie() {
        handleDeleteMovie(movie)
        setSaveMovie(!saveMovie)
    }

    function handleSaveMovies() {
        handleSaveMovie(movie)
        setSaveMovie(!saveMovie)
    }


    return (
        <div className='moviescard'>
            <div className="moviescard__information">
                <h2 className="moviescard__title">{movie.nameRU}</h2>
                <p className="moviescard__duration">{movie.duration}</p>
                {location.pathname === '/movies' ?
                    <button className={`moviescard__save ${saveMovie ? 'moviescard__save_active' : ''}`} type='button' onClick={saveMovie ? handleDelMovie : handleSaveMovies} />
                    :
                    <button onClick={handleDelMovie} className='moviescard__remove' type='button' />
                }
            </div>
            <img className="moviescard__img" src={`${location.pathname === '/movies' ? `https://api.nomoreparties.co${movie.image.url}` : movie.image}`
            } alt={movie.nameRU} />
        </div>
    )
}

export default MoviesCard;