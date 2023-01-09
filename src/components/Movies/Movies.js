import React from "react";
import './Movies.css';
import Header from '../Header/Header'
import Navigation from '../Navigation/Navigation'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Footer from '../Footer/Footer'


function Movies(props) {

    return (
        <div className='movies'>
            <Header>
                < Navigation loggedIn={props.loggedIn} />
            </Header>
            <SearchForm checked={props.checked} handleChange={props.handleChange}  requestTextError={props.requestTextError} requestText={props.requestText} requestTextHandler={props.requestTextHandler} requestFormSubmit={props.requestFormSubmit} />
            <MoviesCardList handleDeleteMovie={props.handleDeleteMovie} handleSaveMovie={props.handleSaveMovie} saveMovie={props.saveMovie} messageFound={props.messageFound} movies={props.movies} preloaderActive={props.preloaderActive} />
            <Footer />
        </div>
    );
}

export default Movies;
