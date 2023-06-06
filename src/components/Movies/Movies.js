import React from "react";
import './Movies.css';
import Header from '../Header/Header'
import Navigation from '../Navigation/Navigation'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import { moviesItems } from "../../utils/items";
import Footer from '../Footer/Footer'


function Movies(props) {

    return (
        <div className='movies'>
            <Header>
                < Navigation loggedIn={props.loggedIn} />
            </Header>
            <SearchForm />
            <MoviesCardList moviesItems={moviesItems} />
            <Footer />
        </div>
    );
}

export default Movies;
