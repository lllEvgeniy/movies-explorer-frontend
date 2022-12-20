import React from "react";
import './SavedMovies.css';
import Header from '../Header/Header'
import Navigation from '../Navigation/Navigation'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import { moviesSaveItems } from "../../utils/items";
import Footer from '../Footer/Footer'



function SavedMovies(props) {

    return (
        <div className='savedmovies'>
            <Header>
                < Navigation loggedIn={props.loggedIn} />
            </Header>
            <SearchForm />
            <MoviesCardList moviesItems={moviesSaveItems} />
            <Footer />
        </div>
    );
}

export default SavedMovies;
