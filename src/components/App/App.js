import React, { useState, useEffect } from 'react';
import './App.css';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import Profile from '../Profile/Profile';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import { Routes, Route, useLocation, useNavigate, } from "react-router-dom";
import { getContent } from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [loggedIn, setLoggedIn] = useState(false);
  const [preloaderActive, setPreloaderActive] = useState(false);
  const [updateList, setUpdateList] = useState(true);
  const [messageFound, setMessageFound] = useState('');
  const [requestText, setRequestText] = useState('');
  const [requestTextError, setRequestTextError] = useState('');
  const [movies, setMovies] = useState([]);
  const [registerError, setRegisterError] = useState('');
  const [loginError, setLoginError] = useState('');
  const [currentUser, setCurrentUser] = useState('');
  const [checked, setChecked] = useState(false);
  const [dataSave, setDataSave] = useState(false);

  useEffect(() => {

    if (JSON.parse(localStorage.getItem('checkbox')) !== null) {
      setChecked(JSON.parse(localStorage.getItem('checkbox')))
    } if (localStorage.getItem('requestText') !== null) {
      setRequestText(localStorage.getItem('requestText'))
    }
    mainApi.getInfo(localStorage.getItem('jwt'))
    .then((res) => {
      if (res.data._id) {
        setCurrentUser(res.data)
        handLeloggedIn()
        if (location.pathname === "/signin" || location.pathname === "/signup") {
          navigate("/")
        } else {
          navigate(location.pathname)
        }
      }
    })
    .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    reRender()
  }, [location.pathname]);

  useEffect(() => {
    reRender()
  }, [updateList]);

  const requestTextHandler = (e) => {

    setRequestText(e.target.value)
    if (e.target.value) {
      setRequestTextError('')
    }

  }

  function reRender() {
    if (location.pathname === '/saved-movies') {
      mainApi.getInfoMovies(localStorage.getItem('jwt'))
        .then((res) => {
          localStorage.setItem('savedMovies', JSON.stringify(res))
          setMovies(JSON.parse((localStorage.getItem('savedMovies'))) || [])
        })
        .catch((err) => {
          setMessageFound('Во время запроса произошла ошибка')
          console.log(err);
        })
      setRequestText('')
      setChecked(false)
    } if (location.pathname === '/movies') {
      setMovies(JSON.parse((localStorage.getItem('searchMovies'))) || [])
      setRequestText((localStorage.getItem('requestText')) || [])
      setChecked(JSON.parse((localStorage.getItem('checkbox'))))
    }
  }

  function handLeloggedIn() {
    setLoggedIn(true);
  }

  function processingData(requestText, data) {
    let newMass = []
    localStorage.getItem('movies') === null && localStorage.setItem('movies', JSON.stringify(data))
    JSON.parse(localStorage.getItem('movies')).forEach(item => {
      item.nameRU.toLowerCase().search(requestText.toLowerCase()) !== -1 && newMass.push(item)
    })
    if (localStorage.getItem('checkbox') === 'true') {
      newMass = newMass.filter((item) => {
        return item.duration <= 40
      })
    }
    localStorage.setItem('searchMovies', JSON.stringify(newMass));
    newMass.length === 0 && setMessageFound('Ничего не найдено');
    setUpdateList(!updateList)
  }

  function requestFormSubmit(e) {
    e.preventDefault();
    setMessageFound('')
    if (requestText === '') {
      setRequestTextError('Нужно ввести ключевое слово')
    } else {
      if (location.pathname === '/movies') {
        localStorage.setItem('requestText', requestText)
      }
      if (localStorage.getItem('movies') !== null && location) {
        processingData(requestText)
      } else {
        getData(requestText)
      }
    }
  }

  function savedMoviesSearch(e) {
    e.preventDefault();
    setMessageFound('')
    if (requestText === '') {
      setRequestTextError('Нужно ввести ключевое слово')
    } else {
      processingDataSavedMovies(requestText)
    }
  }

  function processingDataSavedMovies(requestText) {
    let newMass = []
    JSON.parse(localStorage.getItem('savedMovies')).forEach(item => {
      item.nameRU.toLowerCase().search(requestText.toLowerCase()) !== -1 && newMass.push(item)
    })
    if (checked) {
      newMass = newMass.filter((item) => {
        return item.duration <= 40
      })
    }
    setMovies(newMass)
    newMass.length === 0 && setMessageFound('Ничего не найдено');
  }

  function getData(requestText) {
    setPreloaderActive(true)
    getContent()
      .then((data) => {
        processingData(requestText, data)
      })
      .catch((err) => {
        setMessageFound('Во время запроса произошла ошибка')
        console.log(err);
      })
      .finally(() => {
        setPreloaderActive(false)
      })
  }

  function handleSubmitSignin({ email, password }) {
    mainApi.signin(password, email)
      .then((response) => {
        if (response.token) {
          localStorage.setItem('jwt', response.token);
          handLeloggedIn()
          getDataUser()
          navigate("/movies")
        } else {
          setLoginError('Что-то пошло не так!')
        }
      })
      .catch((err) => console.log(err));
  }

  function getDataUser() {
    mainApi.getInfo(localStorage.getItem('jwt'))
      .then((res) => {
        if (res.data._id) {
          setCurrentUser(res.data)
          handLeloggedIn()
        }
      })
      .catch(err => console.log(err))
  }

  function handleUpdateUser(name, email) {
    mainApi.editProfile(name, email, localStorage.getItem('jwt'))
      .then((res) => {
        setCurrentUser(res.data)
        setDataSave(true)

      })

      .catch(err => console.log(err))
  }

  function handleSubmitSignup({ email, password, name }) {
    mainApi.signup(password, email, name)
      .then((res) => {
        res._id ? handleSubmitSignin({ email, password }) : setRegisterError('Что-то пошло не так!')
      }).catch((err) => console.log(err));
  }

  const handleSaveMovie = (movie) => {
    let newMass
    if (localStorage.getItem('savedMovies') !== null) {
      newMass = JSON.parse(localStorage.getItem('savedMovies'))
    } else {
      newMass = []
    }
    mainApi.createMovie(movie, localStorage.getItem('jwt'))
      .then((data) => {
        newMass.push(data)
        localStorage.setItem('savedMovies', JSON.stringify(newMass))
      })
      .catch((errorMessage) => {
        console.log(errorMessage);
      });
  }

  const handleDeleteMovie = (movie) => {
    let movieId
    JSON.parse(localStorage.getItem('savedMovies')).forEach((item) => {
      if (movie.id === item.movieId)
        movieId = item._id
    })
    mainApi.deleteMovie(movieId || movie._id, localStorage.getItem('jwt'))
      .then((delMovie) => {
        renderAfterDel(delMovie)
      })
      .catch((errorMessage) => {
        console.log(errorMessage);
      });
  }

  function renderAfterDel(delMovie) {
    const newMass = JSON.parse(localStorage.getItem('savedMovies')).filter(e => e._id !== delMovie._id)
    localStorage.setItem('savedMovies', JSON.stringify(newMass))
    location.pathname === '/saved-movies' && setMovies(newMass)
  }

  function handleChangeCheckbox() {
    setChecked(!checked)
    if (location.pathname === '/movies') {
      localStorage.setItem('checkbox', !checked)
    }
  }

  return (
    <div className='App'>
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/" element={<Main loggedIn={loggedIn} />} />
          <Route path="/movies" element={<ProtectedRoute loggedIn={loggedIn} component={<Movies checked={checked} handleChange={handleChangeCheckbox} handleDeleteMovie={handleDeleteMovie} handleSaveMovie={handleSaveMovie} messageFound={messageFound} requestTextError={requestTextError} requestText={requestText} requestTextHandler={requestTextHandler} movies={movies} preloaderActive={preloaderActive} requestFormSubmit={requestFormSubmit} loggedIn={loggedIn} />}></ProtectedRoute>} />
          <Route path="/saved-movies" element={<ProtectedRoute loggedIn={loggedIn} component={<SavedMovies requestText={requestText} requestTextHandler={requestTextHandler} checked={checked} handleChange={handleChangeCheckbox} movies={movies} handleDeleteMovie={handleDeleteMovie} requestTextError={requestTextError} messageFound={messageFound} loggedIn={loggedIn} requestFormSubmit={savedMoviesSearch} />}></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute handLeloggedIn={handLeloggedIn} loggedIn={loggedIn} component={<Profile handleUpdateUser={handleUpdateUser} loggedIn={loggedIn} dataSave={dataSave} setDataSave={setDataSave} />}></ProtectedRoute>} />
          <Route path="/signup" element={<Register registerError={registerError} handleSubmit={handleSubmitSignup} />} />
          <Route path="/signin" element={<Login loginError={loginError} handleSubmit={handleSubmitSignin} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
