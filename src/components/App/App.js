/* eslint-disable no-unused-vars */
import "./App.scss";
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Layout from "../Layout/Layout";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import NavPopup from "../NavPopup/NavPopup";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import * as MainApi from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [isNavPopupOpen, setIsNavPopupOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
  });
  const navigate = useNavigate();
  const location = useLocation();

  function handleNavPopupOpen() {
    setIsNavPopupOpen(true);
  }
  function closeAllPopups() {
    setIsNavPopupOpen(false);
  }

  function getToken() {
    return localStorage.getItem("jwt");
  }

  useEffect(() => {
    tokenCheck();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isLogged) {
      const fromPage = location.state?.from.pathname || "/";
      navigate(fromPage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogged]);

  async function tokenCheck() {
    if (getToken()) {
      await MainApi.getUserInfo(getToken())
        .then((res) => {
          setCurrentUser({
            name: res.name,
            email: res.email,
          });
          setIsLogged(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function handleRegister(name, email, password) {
    MainApi.register(name, email, password)
      .then(() => {
        navigate("/sign-in");
      })
      .catch((err) => {
        console.log(err.error);
      });
  }

  function handleLogin(email, password) {
    MainApi.login(email, password)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        tokenCheck();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleLoguot() {
    localStorage.removeItem("jwt");
    setIsLogged(false);
  }

  function handleEditProfile(name, email) {
    MainApi.editProfile(name, email, getToken())
      .then((res) => {
        setCurrentUser({
          name: res.name,
          email: res.email,
        });
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
            <Route
              path="movies"
              element={
                <ProtectedRoute isLogged={isLogged}>
                  <Movies />
                </ProtectedRoute>
              }
            />
            <Route
              path="saved-movies"
              element={
                <ProtectedRoute isLogged={isLogged}>
                  <SavedMovies />
                </ProtectedRoute>
              }
            />
            <Route
              path="profile"
              element={
                <ProtectedRoute isLogged={isLogged}>
                  <Profile
                    handlerSubmit={handleEditProfile}
                    handlerLogout={handleLoguot}
                  />
                </ProtectedRoute>
              }
            />
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
