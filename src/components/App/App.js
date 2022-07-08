import "./App.css";
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Foter from "../Footer/Footer";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: "Roma",
    email: "test@test.ru",
  });

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Switch>
          <Route patth="/">
            <Main />
          </Route>

          <Route path="/signup"></Route>

          <Route path="/signin"></Route>

          <Route path="/movies"></Route>

          <Route path="/saved-movies"></Route>

          <Route path="/profile"></Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
