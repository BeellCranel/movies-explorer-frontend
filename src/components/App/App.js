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
  const [isFilterMovies, setIsFilterMovies] = useState(false);
  const [isFilterMoviesSave, setIsFilterMoviesSave] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isNavPopupOpen, setIsNavPopupOpen] = useState(false);
  const [isErrPopupOpen, setIsErrPopupOpen] = useState(false);
  // массивы карточек фильмов
  const [moviesCollection, setMoviesCollection] = useState([]);
  const [savedMoviesCollection, setSavedMoviesCollection] = useState([]);
  const [filterMoviesCollection, setFilterMoviesCollection] = useState([]);
  const [filterSavedMoviesCollection, setFilterSavedMoviesCollection] =
    useState([]);
  const [timeFilterMoviesCollection, setTimeFilterMoviesCollection] = useState(
    []
  );
  const [timeFilterSavedMoviesCollection, setTimeFilterSavedMoviesCollection] =
    useState([]);
  // состояния  ошибок, сообщения результатов поиска фильмов
  const [errorMessage, setErrorMessage] = useState({
    state: false,
    status: "",
    message: "",
  });
  const [successEdit, setSuccessEdit] = useState({
    state: false,
    message: "",
  });
  const [errorMoviesMessage, setErrorMoviesMessage] = useState({
    state: false,
    message: "",
  });
  const [errorSavedMoviesMessage, setErrorSavedMoviesMessage] = useState({
    state: false,
    message: "",
  });
  const [searchMoviesMessage, setSearchMoviesMessage] = useState({
    state: false,
    message: "",
  });
  const [searchShortMoviesMessage, setSearchShortMoviesMessage] = useState({
    state: false,
    message: "",
  });
  const [searchSavedMoviesMessage, setSearchSavedMoviesMessage] = useState({
    state: false,
    message: "",
  });
  const [searchShortSavedMoviesMessage, setSearchShortSavedMoviesMessage] =
    useState({
      state: false,
      message: "",
    });
  const [searchWord, setSearchWord] = useState({
    state: false,
    word: "",
  });
  const [searchWordSave, setSearchWordSave] = useState({
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

  function changeFilter(isMovies) {
    if (isMovies) {
      localStorage.setItem("checkboxM", !isFilterMovies);
      setIsFilterMovies(!isFilterMovies);
    } else {
      localStorage.setItem("checkboxS", !isFilterMoviesSave);
      setIsFilterMoviesSave(!isFilterMoviesSave);
    }
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

    setSuccessEdit({
      state: false,
      message: "",
    });

    setErrorMoviesMessage({
      state: false,
      message: "",
    });

    setErrorSavedMoviesMessage({
      state: false,
      message: "",
    });

    setSearchMoviesMessage({
      state: false,
      message: "",
    });

    setSearchShortMoviesMessage({
      state: false,
      message: "",
    });

    setSearchSavedMoviesMessage({
      state: false,
      message: "",
    });

    setSearchShortSavedMoviesMessage({
      state: false,
      message: "",
    });

    localStorage.removeItem("filterMoviesCollectionMessage");
    localStorage.removeItem("timeFilterMoviesCollectionMessage");

    localStorage.removeItem("filterSavedMoviesCollectionMessage");
    localStorage.removeItem("timeFilterSavedMoviesCollectionMessage");
  }

  useEffect(() => {
    tokenCheck();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isLogged) {
      getDataFromLocalStor();
      const fromPage = location.state?.from.pathname || "/movies";
      navigate(fromPage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogged]);

  function tokenCheck() {
    if (getToken()) {
      MainApi.getUserInfo(getToken())
        .then((res) => {
          setCurrentUser({
            name: res.name,
            email: res.email,
          });
          setIsLogged(true);
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
  }

  function getToken() {
    return localStorage.getItem("jwt");
  }

  function getDataFromLocalStor() {
    const movies = JSON.parse(localStorage.getItem("moviesCollection"));
    const savedMovies = JSON.parse(
      localStorage.getItem("savedMoviesCollection")
    );
    const filterMovies = JSON.parse(
      localStorage.getItem("filterMoviesCollection")
    );
    const filterSavedMovies = JSON.parse(
      localStorage.getItem("filterSavedMoviesCollection")
    );
    const timeFilterMovies = JSON.parse(
      localStorage.getItem("timeFilterMoviesCollection")
    );
    const timeFilterSavedMovies = JSON.parse(
      localStorage.getItem("timeFilterSavedMoviesCollection")
    );
    const searchWordM = JSON.parse(localStorage.getItem("searchWord"));
    const searchWordS = JSON.parse(localStorage.getItem("searchWordSave"));
    const searchMoviesMes = JSON.parse(
      localStorage.getItem("searchMoviesMessage")
    );
    const searchShortMoviesMes = JSON.parse(
      localStorage.getItem("searchShortMoviesMessage")
    );
    const searchSavedMoviesMes = JSON.parse(
      localStorage.getItem("searchSavedMoviesMessage")
    );
    const searchShortSavedMoviesMes = JSON.parse(
      localStorage.getItem("searchShortSavedMoviesMessage")
    );
    const checkboxM = JSON.parse(localStorage.getItem("checkboxM"));
    const checkboxS = JSON.parse(localStorage.getItem("checkboxS"));

    if (movies) {
      setMoviesCollection(movies);
    } else {
      MoviesApi.getInitialMovies()
        .then((res) => {
          setMoviesCollection(res);
          localStorage.setItem("moviesCollection", JSON.stringify(res));
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
      setSavedMoviesCollection(savedMovies);
    } else {
      MainApi.getSavedMovies(getToken())
        .then((res) => {
          setSavedMoviesCollection(res);
          localStorage.setItem("savedMoviesCollection", JSON.stringify(res));
          setFilterSavedMoviesCollection(res);
          localStorage.setItem(
            "filterSavedMoviesCollection",
            JSON.stringify(res)
          );
          setTimeFilterSavedMoviesCollection(searchShort(res));
          localStorage.setItem(
            "timeFilterSavedMoviesCollection",
            JSON.stringify(searchShort(res))
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

    if (filterMovies) {
      setFilterMoviesCollection(filterMovies);
    }

    if (filterSavedMovies) {
      setFilterSavedMoviesCollection(filterSavedMovies);
    }

    if (timeFilterMovies) {
      setTimeFilterMoviesCollection(timeFilterMovies);
    }

    if (timeFilterSavedMovies) {
      setTimeFilterSavedMoviesCollection(timeFilterSavedMovies);
    }

    if (searchWordM) {
      setSearchWord(searchWordM);
    }

    if (searchWordS) {
      setSearchWordSave(searchWordS);
    }

    if (searchMoviesMes) {
      setSearchMoviesMessage(searchMoviesMes);
    }

    if (searchShortMoviesMes) {
      setSearchShortMoviesMessage(searchShortMoviesMes);
    }

    if (searchSavedMoviesMes) {
      setSearchSavedMoviesMessage(searchSavedMoviesMes);
    }

    if (searchShortSavedMoviesMes) {
      setSearchShortSavedMoviesMessage(searchShortSavedMoviesMes);
    }

    if (checkboxM) {
      setIsFilterMovies(checkboxM);
    }

    if (checkboxS) {
      setIsFilterMoviesSave(checkboxS);
    }
  }

  function searchMovies(searchText) {
    const searchState = {
      state: true,
      word: searchText,
    };
    localStorage.setItem("searchWord", JSON.stringify(searchState));
    setSearchWord(searchState);

    resetErrors();
    setIsLoading(true);

    if (moviesCollection.length === 0) {
      MoviesApi.getInitialMovies()
        .then((res) => {
          setMoviesCollection(res);
          localStorage.setItem("moviesCollection", JSON.stringify(res));
        })
        .catch((err) => {
          console.log(err);
          setErrorMoviesMessage({
            state: true,
            message:
              "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз",
          });
        });
    }

    const result = search(moviesCollection, searchText);
    setFilterMoviesCollection(result);
    localStorage.setItem("filterMoviesCollection", JSON.stringify(result));
    if (result.length === 0) {
      const message = {
        state: true,
        message: "Ничего не найдено",
      };
      setSearchMoviesMessage(message);
      localStorage.setItem(
        "filterMoviesCollectionMessage",
        JSON.stringify(message)
      );
    }

    const resultShort = searchShort(result);
    setTimeFilterMoviesCollection(resultShort);
    localStorage.setItem(
      "timeFilterMoviesCollection",
      JSON.stringify(resultShort)
    );
    if (resultShort.length === 0) {
      const message = {
        state: true,
        message: "Ни одной короткометражки",
      };
      setSearchShortMoviesMessage(message);
      localStorage.setItem(
        "timeFilterMoviesCollectionMessage",
        JSON.stringify(message)
      );
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }

  function searchSavedMovie(searchText) {
    const searchState = {
      state: true,
      word: searchText,
    };
    localStorage.setItem("searchWordSave", JSON.stringify(searchState));
    setSearchWordSave(searchState);

    resetErrors();
    setIsLoading(true);
    if (savedMoviesCollection.length === 0) {
      MainApi.getSavedMovies(getToken())
        .then((res) => {
          setSavedMoviesCollection(res);
          localStorage.setItem("savedMoviesCollection", JSON.stringify(res));
        })
        .catch((err) => {
          setErrorSavedMoviesMessage({
            state: true,
            message:
              "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз",
          });
        });
    }

    const result = search(savedMoviesCollection, searchText);
    setFilterSavedMoviesCollection(result);
    localStorage.setItem("filterSavedMoviesCollection", JSON.stringify(result));
    if (result.length === 0) {
      const message = {
        state: true,
        message: "Ничего не найдено",
      };
      setSearchSavedMoviesMessage(message);
      localStorage.setItem(
        "filterSavedMoviesCollectionMessage",
        JSON.stringify(message)
      );
    }

    const resultShort = searchShort(result);
    setTimeFilterSavedMoviesCollection(resultShort);
    localStorage.setItem(
      "timeFilterSavedMoviesCollection",
      JSON.stringify(resultShort)
    );
    if (resultShort.length === 0) {
      const message = {
        state: true,
        message: "Ничего не найдено",
      };
      setSearchShortSavedMoviesMessage(message);
      localStorage.setItem(
        "timeFilterSavedMoviesCollectionMessage",
        JSON.stringify(message)
      );
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }

  function resetSearchResult(isMovies) {
    resetErrors();
    if (isMovies) {
      const searchState = {
        state: false,
        word: "",
      };
      localStorage.setItem("searchWord", JSON.stringify(searchState));
      setSearchWord(searchState);

      localStorage.setItem("filterMoviesCollection", JSON.stringify([]));
      setFilterMoviesCollection([]);
      localStorage.setItem("timeFilterMoviesCollection", JSON.stringify([]));
      setTimeFilterMoviesCollection([]);
    } else {
      const searchState = {
        state: false,
        word: "",
      };
      localStorage.setItem("searchWordSave", JSON.stringify(searchState));
      setSearchWordSave(searchState);

      localStorage.setItem(
        "filterSavedMoviesCollection",
        JSON.stringify(savedMoviesCollection)
      );
      setFilterSavedMoviesCollection(savedMoviesCollection);
      localStorage.setItem(
        "timeFilterSavedMoviesCollection",
        JSON.stringify(searchShort(savedMoviesCollection))
      );
      setTimeFilterSavedMoviesCollection(searchShort(savedMoviesCollection));
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
    localStorage.clear();
    setIsLogged(false);
    setMoviesCollection([]);
    setSavedMoviesCollection([]);
    setFilterMoviesCollection([]);
    setFilterSavedMoviesCollection([]);
    setTimeFilterMoviesCollection([]);
    setTimeFilterSavedMoviesCollection([]);
    resetErrors();
  }

  function handleEditProfile(name, email) {
    MainApi.editProfile(name, email, getToken())
      .then((res) => {
        setCurrentUser({
          name: res.name,
          email: res.email,
        });
        setSuccessEdit({
          state: true,
          message: "Данные потзователя успешно изменены",
        });
        setIsErrPopupOpen(true);
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
        const result = [res, ...savedMoviesCollection];
        localStorage.setItem("savedMoviesCollection", JSON.stringify(result));
        setSavedMoviesCollection(result);

        if (searchWordSave.state) {
          const filteredResult = search(result, searchWordSave.word);
          localStorage.setItem(
            "filterSavedMoviesCollection",
            JSON.stringify(filteredResult)
          );
          setFilterSavedMoviesCollection(filteredResult);

          localStorage.setItem(
            "timeFilterSavedMoviesCollection",
            JSON.stringify(searchShort(filteredResult))
          );
          setTimeFilterSavedMoviesCollection(searchShort(filteredResult));
        } else {
          localStorage.setItem(
            "filterSavedMoviesCollection",
            JSON.stringify(result)
          );
          setFilterSavedMoviesCollection(result);

          localStorage.setItem(
            "timeFilterSavedMoviesCollection",
            JSON.stringify(searchShort(result))
          );
          setTimeFilterSavedMoviesCollection(searchShort(result));
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
        localStorage.setItem("savedMoviesCollection", JSON.stringify(result));
        setSavedMoviesCollection(result);

        const feltered = filterById(filterSavedMoviesCollection, id);
        localStorage.setItem(
          "filterSavedMoviesCollection",
          JSON.stringify(feltered)
        );
        setFilterSavedMoviesCollection(feltered);

        const short = filterById(timeFilterSavedMoviesCollection, id);
        localStorage.setItem(
          "timeFilterSavedMoviesCollection",
          JSON.stringify(short)
        );
        setTimeFilterSavedMoviesCollection(short);
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
                    filterState={isFilterMovies}
                    isLoading={isLoading}
                    changeFilter={changeFilter}
                    searchSubmit={searchMovies}
                    movies={
                      isFilterMovies
                        ? timeFilterMoviesCollection
                        : filterMoviesCollection
                    }
                    savedMovies={savedMoviesCollection}
                    errorMessage={errorMoviesMessage}
                    searchMessage={
                      isFilterMovies
                        ? searchShortMoviesMessage
                        : searchMoviesMessage
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
                    filterState={isFilterMoviesSave}
                    isLoading={isLoading}
                    changeFilter={changeFilter}
                    movies={
                      isFilterMoviesSave
                        ? timeFilterSavedMoviesCollection
                        : filterSavedMoviesCollection
                    }
                    searchSubmit={searchSavedMovie}
                    savedMovies={savedMoviesCollection}
                    errorMessage={errorSavedMoviesMessage}
                    searchMessage={
                      isFilterMoviesSave
                        ? searchShortSavedMoviesMessage
                        : searchSavedMoviesMessage
                    }
                    searchWord={searchWordSave}
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
          successEdit={successEdit}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
