import React from 'react';
import MoviesCard from "../MoviesCard/MoviesCard";
import './MoviesCardList.css';

function MoviesCardList(props) {

    const countElementsObj = Object.keys(props.moviesItems).length;
    console.log(countElementsObj)



    return (
        <section className='moviescardlist'>
            <div className='moviescardlist__elements'>
                {
                    props.moviesItems.map((movie) => {
                        return (
                            <MoviesCard movie={movie} key={movie._id} saved={false} />
                        )
                    }
                    )}
                <button className={`moviescardlist__btn ${countElementsObj < 7 ? 'moviescardlist__btn_inactive' : ''}`}>Ещё</button>
        </div>
        </section >
    )
}

export default MoviesCardList;