import "./Register.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

function Register() {
  const [userData, setUserData] = useState({
    name: "Roman",
    email: "pochta@yandex.ru",
    password: "pochta@yandex.ru",
  });

  const { name, email, password } = userData;

  function handleChange(e) {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  }

  return (
    <section className="register">
      <Logo />
      <form className="form" name="register">
        <h1 className="form__title">Добро пожаловать!</h1>
        <fieldset className="form__feildset">
          <label className="form__label">
            Имя
            <input
              className="form__input"
              id="name"
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder=""
              required
            />
            <span className="form__error" id="name-error"></span>
          </label>
          <label className="form__label">
            E-mail
            <input
              className="form__input"
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder=""
              required
            />
            <span className="form__error" id="email-error"></span>
          </label>
          <label className="form__label">
            Пароль
            <input
              className="form__input form__input_error"
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder=""
              required
            />
            <span className="form__error" id="email-error">
              Что-то пошло не так...
            </span>
          </label>
        </fieldset>
        <input
          className="form__submit opacity"
          type="submit"
          name="submit"
          value="Зарегистрироваться"
        />
        <div className="form__link">
          <p className="form__link_label">Уже зарегистрированы?</p>
          <Link className="form__link_link opacity" to="/sign-in">
            Войти
          </Link>
        </div>
      </form>
    </section>
  );
}

export default Register;
