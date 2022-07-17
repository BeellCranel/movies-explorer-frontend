import "./Login.scss";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

function Login() {
  return (
    <section className="login">
      <Logo />
      <form className="form">
        <h1 className="form__title">Рады видеть!</h1>
        <fieldset className="form__feildset">
          <label className="form__label">
            E-mail
            <input
              className="form__input"
              id="email"
              type="email"
              name="email"
              value="pochta@yandex.ru"
              placeholder=""
              required
            />
            <span className="form__error" id="email-error"></span>
          </label>
          <label className="form__label form__label_login">
            Пароль
            <input
              className="form__input"
              id="password"
              type="password"
              name="password"
              value=""
              placeholder=""
              required
            />
            <span className="form__error" id="email-error"></span>
          </label>
        </fieldset>
        <input
          className="form__submit opacity"
          type="submit"
          name="submit"
          value="Войти"
        />
        <div className="form__link">
          <p className="form__link_label">Ещё не зарегистрированы?</p>
          <Link className="form__link_link opacity" to="/sign-up">
            Регистрация
          </Link>
        </div>
      </form>
    </section>
  );
}

export default Login;
