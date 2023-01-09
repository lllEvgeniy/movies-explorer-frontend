import React from "react";
import './SavedMovies.css';
import Header from '../Header/Header'
import Navigation from '../Navigation/Navigation'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Footer from '../Footer/Footer'



function SavedMovies(props) {

    return (
        <div className='savedmovies'>
            <Header>
                < Navigation loggedIn={props.loggedIn} />
            </Header>
            <SearchForm checked={props.checked} handleChange={props.handleChange} requestTextError={props.requestTextError} requestText={props.requestText} requestTextHandler={props.requestTextHandler} requestFormSubmit={props.requestFormSubmit} />
            <MoviesCardList movies={props.movies} handleDeleteMovie={props.handleDeleteMovie} messageFound={props.messageFound} />
            <Footer />
        </div>
    );
}

export default SavedMovies;
