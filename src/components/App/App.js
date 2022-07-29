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
import ErrorPopup from "../ErrorPopup/ErrorPopup";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import * as MainApi from "../../utils/MainApi";
import * as MoviesApi from "../../utils/MoviesApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  // состояния чекбоксов, попапов, прелоадорол и т.д.
  const [isLogged, setIsLogged] = useState(false);
  const [isFilterMovies, setIsFilterMovies] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isNavPopupOpen, setIsNavPopupOpen] = useState(false);
  const [isErrPopupOpen, setIsErrPopupOpen] = useState(false);
  // массивы карточек фильмов
  const [moviesCollection, setMoviesCollection] = useState([]);
  const [savedMoviesCollection, setSavedMoviesCollection] = useState([]);
  const [filterMoviesCollection, setFilterMoviesCollection] = useState([]);
  const [filterSavedMoviesCollection, setFilterSavedMoviesCollection] =
    useState([]);
  const [timeFilterMovieCollection, setTimeFilterMovieCollection] = useState(
    []
  );
  const [timeFilterSavedMovieCollection, setTimeFilterSavedMovieCollection] =
    useState([]);
  // состояния  ошибок, сообщения результатов поиска фильмов
  const [errorMessage, setErrorMessage] = useState({
    state: false,
    status: "",
    message: "",
  });
  const [searchMovieMessage, setSearchMovieMessage] = useState({
    state: false,
    message: "",
  });
  const [searchShortMovieMessage, setSearchShortMovieMessage] = useState({
    state: false,
    message: "",
  });
  // данные пользователя
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
  });
  // хуки
  const navigate = useNavigate();
  const location = useLocation();

  function changeFilter() {
    setIsFilterMovies(!isFilterMovies);
  }

  function handleNavPopupOpen() {
    setIsNavPopupOpen(true);
  }

  function closeAllPopups() {
    setIsNavPopupOpen(false);
    setIsErrPopupOpen(false);
  }

  function resetErrors() {
    setErrorMessage({
      state: false,
      status: "",
      message: "",
    });

    setSearchMovieMessage({
      state: false,
      message: "",
    });

    setSearchShortMovieMessage({
      state: false,
      message: "",
    });
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

  function tokenCheck() {
    const jwt = getToken();
    const movies = localStorage.getItem("movies");
    const savedMovies = localStorage.getItem("savedMovies");

    if (jwt) {
      MainApi.getUserInfo(jwt)
        .then((res) => {
          setCurrentUser({
            name: res.name,
            email: res.email,
          });
        })
        .catch((err) => {
          setErrorMessage({
            state: true,
            status: err.status,
            message: err.message,
          });
          setIsErrPopupOpen(true);
        });

      if (movies) {
        const result = JSON.parse(movies);
        setMoviesCollection(result);
      } else {
        MoviesApi.getInitialMovies()
          .then((res) => {
            setMoviesCollection(res);
            localStorage.setItem("movies", JSON.stringify(res));
          })
          .catch((err) => {
            setErrorMessage({
              state: true,
              status: err.status,
              message: err.message,
            });
            setIsErrPopupOpen(true);
          });
      }

      if (savedMovies) {
        const result = JSON.parse(savedMovies);
        setSavedMoviesCollection(result);
      } else {
        MainApi.getSavedMovies(jwt)
          .then((res) => {
            setSavedMoviesCollection(res);
            localStorage.setItem("savedMovies", JSON.stringify(res));
          })
          .catch((err) => {
            setErrorMessage({
              state: true,
              status: err.status,
              message: err.message,
            });
            setIsErrPopupOpen(true);
          });
      }

      setIsLogged(true);
    }
  }

  function searchMovies(searchText) {
    resetErrors();
    setIsLoading(true);
    if (moviesCollection.length === 0) {
      MoviesApi.getInitialMovies()
        .then((res) => {
          setMoviesCollection(res);
          localStorage.setItem("movies", JSON.stringify(res));
        })
        .catch((err) => {
          console.log(err);
          setErrorMessage({
            state: true,
            message:
              "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз",
          });
        });
    }

    const result = search(moviesCollection, searchText);
    setFilterMoviesCollection(result);
    if (result.length === 0) {
      setSearchMovieMessage({
        state: true,
        message: "Ничего не найдено",
      });
    }
    const resultShort = searchShort(result);
    setTimeFilterMovieCollection(resultShort);
    if (resultShort.length === 0) {
      setSearchShortMovieMessage({
        state: true,
        message: "Ни одной короткометражки",
      });
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }

  function search(arr, searchText) {
    let result = [];
    arr.forEach((movie) => {
      if (movie.nameRU.toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
        result.push(movie);
      }
    });
    return result;
  }

  function searchShort(arr) {
    let result = [];
    arr.forEach((movie) => {
      if (movie.duration <= 40) {
        result.push(movie);
      }
    });
    return result;
  }

  function handleRegister(name, email, password) {
    MainApi.register(name, email, password)
      .then(() => {
        navigate("/sign-in");
      })
      .catch((err) => {
        setErrorMessage({
          state: true,
          status: err.status,
          message: err.message,
        });
        setIsErrPopupOpen(true);
      });
  }

  function handleLogin(email, password) {
    MainApi.login(email, password)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        tokenCheck();
      })
      .catch((err) => {
        setErrorMessage({
          state: true,
          status: err.status,
          message: err.message,
        });
        setIsErrPopupOpen(true);
      });
  }

  function handleLoguot() {
    localStorage.removeItem("jwt");
    localStorage.removeItem("movies");
    localStorage.removeItem("savedMovies");
    setIsLogged(false);
    setMoviesCollection([]);
    setSavedMoviesCollection([]);
    setFilterMoviesCollection([]);
    setFilterSavedMoviesCollection([]);
    setTimeFilterMovieCollection([]);
    setTimeFilterSavedMovieCollection([]);
    resetErrors();
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
        setErrorMessage({
          state: true,
          status: err.status,
          message: err.message,
        });
        setIsErrPopupOpen(true);
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
                  <Movies
                    isFilterMovies={isFilterMovies}
                    isLoading={isLoading}
                    changeFilter={changeFilter}
                    searchSubmit={searchMovies}
                    movies={
                      isFilterMovies
                        ? timeFilterMovieCollection
                        : filterMoviesCollection
                    }
                    savedMovies={savedMoviesCollection}
                    errorMessage={errorMessage}
                    searchMessage={
                      isFilterMovies
                        ? searchShortMovieMessage
                        : searchMovieMessage
                    }
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="saved-movies"
              element={
                <ProtectedRoute isLogged={isLogged}>
                  <SavedMovies
                    isFilterMovies={isFilterMovies}
                    changeFilter={changeFilter}
                  />
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
        <ErrorPopup isOpen={isErrPopupOpen} onClose={closeAllPopups} errorMesage={errorMessage} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
