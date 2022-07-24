import "./Register.scss";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

function Register() {
  const {
    register,
    formState: { errors, isValid, isDirty },
    handleSubmit,
    reset,
  } = useForm({ mode: "onChange" });

  function onSubmit(data) {
    alert(JSON.stringify(data));
    reset();
  }

  const submitBtnClassName = `form__submit ${
    !isValid ? "form__submit_disabled" : "opacity"
  }`;

  const inputNameClassName = `form__input${
    errors.name && isDirty ? " form__input_error" : ""
  }`;

  const inputEmailClassName = `form__input${
    errors.email && isDirty ? " form__input_error" : ""
  }`;

  const inputPasswordClassName = `form__input${
    errors.password && isDirty ? " form__input_error" : ""
  }`;

  return (
    <section className="register">
      <Logo />
      <form className="form" name="register" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="form__title">Добро пожаловать!</h1>
        <fieldset className="form__feildset">
          <label className="form__label">
            Имя
            <input
              className={inputNameClassName}
              type="text"
              {...register("name", {
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
            <span className="form__error">{errors?.name?.message}</span>
          </label>
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
          <label className="form__label">
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
        <input
          className={submitBtnClassName}
          type="submit"
          name="submit"
          value="Зарегистрироваться"
          disabled={!isValid}
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
