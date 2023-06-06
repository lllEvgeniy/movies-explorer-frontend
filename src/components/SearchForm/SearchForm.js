import React from "react";
import './SearchForm.css';

function SearchForm(props) {



    return (
        <section className="searchform">
            <form onSubmit={props.requestFormSubmit} noValidate className="searchform__form">
                <input onChange={e => props.requestTextHandler(e)} value={props.requestText || ''} name="films" minLength="2" maxLength="40" required type="text" className="searchform__input" placeholder={`${props.requestTextError === '' ?
                    '🔍 Фильм' : props.requestTextError}`} />
                <button className="searchform__button" type="submit">Найти</button>
            </form>
            <div className='searchform__check'>
                <input onChange={props.handleChange} checked={props.checked  || false} name="checkbox" className="searchform__checkbox-input" type="checkbox" id="checkbox" />
                <label htmlFor="checkbox" className="searchform__label"></label>
                <span className="searchform__text">
                    Короткометражки
                </span>
            </div>
        </section >


    )
}

export default SearchForm;
