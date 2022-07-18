import "./Profile.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Profile() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
  });

  const { name, email } = userData;

  function handleChange(e) {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  }
  return (
    <section className="profile">
      <form className="profile-form" name="profile">
        <h1 className="profile-form__title">Привет, Роман</h1>
        <fieldset className="profile-form__fieldset">
          <label className="profile-form__lable">
            Имя
            <input
              className="profile-form__input"
              id="name"
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Роман"
            />
          </label>
          <label className="profile-form__lable">
            E-mail
            <input
              className="profile-form__input"
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="pochta@yandex.ru"
            />
          </label>
        </fieldset>

        <div className="profile-form__bottom">
          <input
            className="profile-form__submit opacity"
            type="submit"
            name="submit"
            value="Редактировать"
          />
          <Link className="profile-form__link opacity" to="/sign-in">
            Выйти из аккаунта
          </Link>
        </div>
      </form>
    </section>
  );
}

export default Profile;
