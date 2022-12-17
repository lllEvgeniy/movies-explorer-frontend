import React, { useState } from 'react';
import './App.css';
import Main from '../Main/Main'
import Register from '../Register/Register'
import Login from '../Login/Login'
import PageNotFound from '../PageNotFound/PageNotFound'
import Profile from '../Profile/Profile'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import { Routes, Route } from "react-router-dom";





function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  function handLeloggedIn() {
    setLoggedIn(true);
  }

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Main loggedIn={loggedIn} />} />
        <Route path="/movies" element={<Movies loggedIn={!loggedIn} />} />
        <Route path="/saved-movies" element={<SavedMovies loggedIn={!loggedIn} />} />
        <Route path="/profile" element={<Profile loggedIn={!loggedIn} />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
