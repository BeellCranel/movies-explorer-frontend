/* eslint-disable no-unused-vars */
import "./App.scss";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  // const [isLogged, setIsLogged] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: "Roma",
    email: "test@test.ru",
  });

  //<Route path="/signup"></Route>

  //<Route path="/signin"></Route>

  //<Route path="/profile"></Route>

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/saved-movies" element={<SavedMovies />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/sign-up" element={<Register />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
