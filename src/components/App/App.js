/* eslint-disable no-unused-vars */
import "./App.scss";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  // const [isLogged, setIsLogged] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: "Roma",
    email: "test@test.ru",
  });

  //<Route path="/signup"></Route>

  //<Route path="/signin"></Route>

  //<Route path="/movies"></Route>

  //<Route path="/saved-movies"></Route>

  //<Route path="/profile"></Route>

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="/movies" element={<Movies />} />
          </Route>
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
