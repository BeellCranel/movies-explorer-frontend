import "./Login.scss";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

function Login({ handlerSubmit, errorMessage, resetErrors }) {
  const {
    register,
    formState: { errors, isValid, isDirty },
    handleSubmit,
    reset,
  } = useForm({ mode: "onChange" });

  function onSubmit(data) {
    handlerSubmit(data.email, data.password);
    reset();
  }

  const submitBtnClassName = `form__submit ${
    !isValid ? "form__submit_disabled" : "opacity"
  }`;

  const inputEmailClassName = `form__input${
    errors.email && isDirty ? " form__input_error" : ""
  }`;

  const inputPasswordClassName = `form__input${
    errors.password && isDirty ? " form__input_error" : ""
  }`;

  return (
    <section className="login">
      <Logo resetErrors={resetErrors} />
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="form__title">Рады видеть!</h1>
        <fieldset className="form__feildset">
          <label className="form__label">
            E-mail
            <input
              className={inputEmailClassName}
              type="email"
              {...register("email", {
                required: "Поле обязательно к заполнению",
                pattern: {
                  value:
                    // eslint-disable-next-line no-useless-escape
                    /^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,})$/i,
                  message: "Введите корректный адрес электронной почты",
                },
              })}
            />
            <span className="form__error">{errors?.email?.message}</span>
          </label>
          <label className="form__label form__label_login">
            Пароль
            <input
              className={inputPasswordClassName}
              type="password"
              {...register("password", {
                required: "Поле обязательно к заполнению",
                minLength: {
                  value: 2,
                  message: "Минимум 2 символа",
                },
                maxLength: {
                  value: 30,
                  message: "Максимум 30 символов",
                },
              })}
            />
            <span className="form__error">{errors?.password?.message}</span>
          </label>
        </fieldset>
        <span className="form__api-error">{errorMessage?.message}</span>
        <input
          className={submitBtnClassName}
          type="submit"
          name="submit"
          value="Войти"
          disabled={!isValid}
        />
        <div className="form__link">
          <p className="form__link_label">Ещё не зарегистрированы?</p>
          <Link className="form__link_link opacity" to="/sign-up" onClick={resetErrors}>
            Регистрация
          </Link>
        </div>
      </form>
    </section>
  );
}

export default Login;
