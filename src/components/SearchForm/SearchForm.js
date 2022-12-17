import React from "react";
import './SearchForm.css';




function SearchForm() {
    return (
        <section className="searchform">
            <form className="searchform__form">
                <input  className="searchform__input" placeholder="&#128269; Фильм" required />
                <button className="searchform__button" type="submit">Найти</button>
            </form>
            <div className='searchform__check'>
                <input className="searchform__checkbox-input" type="checkbox" id="checkbox" />
                <label htmlFor="checkbox" className="searchform__label"></label>
                <span className="searchform__text">
                    Короткометражки
                </span>
            </div>

        </section >


    )
}

export default SearchForm;
