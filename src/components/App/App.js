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
  const [isFilterSavedMovies, setIsFilterSavedMovies] = useState(false);
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
  const [errorMovieMessage, setErrorMovieMessage] = useState({
    state: false,
    message: "",
  });
  const [errorSavedMovieMessage, setErrorSavedMovieMessage] = useState({
    state: false,
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
  const [searchSavedMovieMessage, setSearchSavedMovieMessage] = useState({
    state: false,
    message: "",
  });
  const [searchShortSavedMovieMessage, setSearchShortSavedMovieMessage] =
    useState({
      state: false,
      message: "",
    });
  const [searchWord, setSearchWord] = useState({
    state: false,
    word: "",
  });
  const [searchWordSaved, setSearchWordSaved] = useState({
    state: false,
    word: "",
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

    setErrorMovieMessage({
      state: false,
      message: "",
    });

    setErrorSavedMovieMessage({
      state: false,
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

    setSearchSavedMovieMessage({
      state: false,
      message: "",
    });

    setSearchShortSavedMovieMessage({
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
      const fromPage = location.state?.from.pathname || "/movies";
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
        setFilterSavedMoviesCollection(result);
        setTimeFilterSavedMovieCollection(searchShort(result));
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
    setSearchWord({
      state: true,
      word: searchText,
    });
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
          setErrorMovieMessage({
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

  function searchSavedMovie(searchText) {
    resetErrors();
    setSearchWordSaved({
      state: true,
      word: searchText,
    });
    setIsLoading(true);
    if (savedMoviesCollection.length === 0) {
      MainApi.getSavedMovies(getToken())
        .then((res) => {
          setSavedMoviesCollection(res);
          localStorage.setItem("savedMovies", JSON.stringify(res));
        })
        .catch((err) => {
          setErrorSavedMovieMessage({
            state: true,
            message:
              "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз",
          });
        });
    }

    const result = search(savedMoviesCollection, searchText);
    setFilterSavedMoviesCollection(result);
    if (result.length === 0) {
      setSearchSavedMovieMessage({
        state: true,
        message: "Ничего не найдено",
      });
    }

    const resultShort = searchShort(result);
    setTimeFilterSavedMovieCollection(resultShort);
    if (resultShort.length === 0) {
      setSearchShortSavedMovieMessage({
        state: true,
        message: "Ни одной короткометражки",
      });
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }

  function resetSearchResult(isMovies) {
    resetErrors();
    if (isMovies) {
      setSearchWord({
        state: false,
        word: "",
      });
      setFilterMoviesCollection([]);
      setTimeFilterMovieCollection([]);
    } else {
      setSearchWordSaved({
        state: false,
        word: "",
      });
      setFilterSavedMoviesCollection(savedMoviesCollection);
      setTimeFilterSavedMovieCollection(searchShort(savedMoviesCollection));
    }
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
        resetErrors();
        handleLogin(email, password);
      })
      .catch((err) => {
        setErrorMessage({
          state: true,
          status: err.status,
          message: err.message,
        });
      });
  }

  function handleLogin(email, password) {
    MainApi.login(email, password)
      .then((res) => {
        resetErrors();
        localStorage.setItem("jwt", res.token);
        tokenCheck();
      })
      .catch((err) => {
        setErrorMessage({
          state: true,
          status: err.status,
          message: err.message,
        });
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

  function handleSaveMovie(movie) {
    resetErrors();
    MainApi.saveMovie(getToken(), movie)
      .then((res) => {
        const result = [ res, ...savedMoviesCollection];
        localStorage.setItem("savedMovies", JSON.stringify(result));
        setSavedMoviesCollection(result);
        if (searchWordSaved.state) {
          const filteredResult = search(result, searchWordSaved.word);
          setFilterSavedMoviesCollection(filteredResult);
          setTimeFilterSavedMovieCollection(searchShort(filteredResult))
        } else {
          setFilterSavedMoviesCollection(result);
          setTimeFilterSavedMovieCollection(searchShort(result));
        }
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

  function handleDeleteMovei(id) {
    MainApi.deleteMovie(getToken(), id)
      .then(() => {
        const result = filterById(savedMoviesCollection, id);
        localStorage.setItem("savedMovies", JSON.stringify(result));
        setSavedMoviesCollection(result);
        setFilterSavedMoviesCollection(
          filterById(filterSavedMoviesCollection, id)
        );
        setTimeFilterSavedMovieCollection(
          filterById(timeFilterSavedMovieCollection, id)
        );
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

  function filterById(arr, id) {
    return arr.filter((item) => {
      return item._id !== id;
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
                    errorMessage={errorMovieMessage}
                    searchMessage={
                      isFilterMovies
                        ? searchShortMovieMessage
                        : searchMovieMessage
                    }
                    searchWord={searchWord}
                    resetSearchResult={resetSearchResult}
                    onSave={handleSaveMovie}
                    onDel={handleDeleteMovei}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="saved-movies"
              element={
                <ProtectedRoute isLogged={isLogged}>
                  <SavedMovies
                    isFilterMovies={isFilterSavedMovies}
                    isLoading={isLoading}
                    changeFilter={changeFilter}
                    movies={
                      isFilterMovies
                        ? timeFilterSavedMovieCollection
                        : filterSavedMoviesCollection
                    }
                    searchSubmit={searchSavedMovie}
                    savedMovies={savedMoviesCollection}
                    errorMessage={errorSavedMovieMessage}
                    searchMessage={
                      isFilterMovies
                        ? searchShortSavedMovieMessage
                        : searchSavedMovieMessage
                    }
                    searchWord={searchWordSaved}
                    resetSearchResult={resetSearchResult}
                    onDel={handleDeleteMovei}
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
            element={
              <Register
                handlerSubmit={handleRegister}
                errorMessage={errorMessage}
                resetErrors={resetErrors}
              />
            }
          />
          <Route
            path="/sign-in"
            element={
              <Login
                handlerSubmit={handleLogin}
                errorMessage={errorMessage}
                resetErrors={resetErrors}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <NavPopup isOpen={isNavPopupOpen} onClose={closeAllPopups} />
        <ErrorPopup
          isOpen={isErrPopupOpen}
          onClose={closeAllPopups}
          errorMesage={errorMessage}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
