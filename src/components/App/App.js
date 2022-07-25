/* eslint-disable no-unused-vars */
import "./App.scss";
import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import NavPopup from "../NavPopup/NavPopup";
import * as MainApi from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [isNavPopupOpen, setIsNavPopupOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: "Roma",
    email: "test@test.ru",
  });
  const navigate = useNavigate();

  function handleNavPopupOpen() {
    setIsNavPopupOpen(true);
  }
  function closeAllPopups() {
    setIsNavPopupOpen(false);
  }

  function handleRegister(name, email, password) {
    MainApi.register(name, email, password)
      .then(() => {
        navigate("/sign-in");
        console.log("Аккаунт успешно зарегистрирован!");
      })
      .catch((err) => {
        console.log(err.error);
      });
  }

  function handleLogin(email, password) {
    MainApi.login(email, password)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setIsLogged(true);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={<Layout onOpen={handleNavPopupOpen} isLogged={isLogged} />}
          >
            <Route index element={<Main />} />
            <Route path="movies" element={<Movies />} />
            <Route path="saved-movies" element={<SavedMovies />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route
            path="/sign-up"
            element={<Register handlerSubmit={handleRegister} />}
          />
          <Route
            path="/sign-in"
            element={<Login handlerSubmit={handleLogin} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <NavPopup isOpen={isNavPopupOpen} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
