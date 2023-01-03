import React, { useState, useEffect } from 'react';
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from '../Preloader/Preloader'
import './MoviesCardList.css';
import { useLocation } from "react-router-dom";

function MoviesCardList(props) {
    const location = useLocation();
    // location.pathname === '/movies' ? movies : )
    const [countCardsRender, setCountCardsRender] = useState(7)
    const [countClickRender, setCountClickRender] = useState(7)


    const [visible, setVisible] = useState(false)


    useEffect(() => {
        if (window.innerWidth <= 480 || window.innerWidth >= 320) {
            resizeThrottler()
        }
        window.addEventListener('resize', handleResize)
    }, []);

    useEffect(() => {
        btnVissible()
    }, [props.movies]);

    useEffect(() => {
        btnVissible()
    }, [countCardsRender]);


    function resizeThrottler() {
        if (window.innerWidth <= 480 && window.innerWidth >= 320) {
            setCountCardsRender(5)
            setCountClickRender(5)
        }
    }

    function handleResize() {
        setTimeout(resizeThrottler, 1000)
    }

    function clickRender() {
        setCountCardsRender(countCardsRender + countClickRender)
    }

    function btnVissible() {
        props.movies.length <= countCardsRender ? setVisible(false) : setVisible(true)
    }

    return (
        <section className='moviescardlist'>
            <Preloader preloaderActive={props.preloaderActive} />
            <span className={`moviescardlist_span ${props.messageFound !== '' ? 'moviescardlist_span_active' : ''}`}>{props.messageFound}</span>
            <div className='moviescardlist__elements'>
                {
                    props.movies.slice(0, location.pathname === '/movies' ? countCardsRender : props.movies.length).map((movie) => {
                        return (
                            <MoviesCard handleDeleteMovie={props.handleDeleteMovie} handleSaveMovie={props.handleSaveMovie} movie={movie} key={movie.id || movie.movieId} />
                        )
                    }
                    )}
                <button onClick={clickRender} className={location.pathname === '/movies' ? `moviescardlist__btn ${!visible ? 'moviescardlist__btn_inactive' : ''}` : 'moviescardlist__btn_inactive'}>Ещё</button>
            </div>
        </section >
    )
}

//

export default MoviesCardList;