import "./Profile.scss";
import React, { useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile({ handlerLogout, handlerSubmit }) {
  const currentUser = useContext(CurrentUserContext);
  const { name, email } = currentUser;
  const {
    register,
    formState: { errors, isValid, isDirty },
    handleSubmit,
    reset,
    watch,
    setValue,
  } = useForm({ mode: "onChange" });
  const inputValues = watch();

  function onSubmit(data) {
    handlerSubmit(data.name, data.email);
    reset();
  }

  useEffect(() => {
    if (name.length !== 0 && email.length !== 0) {
      setValue("name", name, {
        shouldValidate: false,
        shouldDirty: false,
        shouldTouch: false,
      });
      setValue("email", email, {
        shouldValidate: false,
        shouldDirty: false,
        shouldTouch: false,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  const inputNameClassName = `profile-form__input${
    errors.name && isDirty ? " profile-form__input_error" : ""
  }`;

  const inputEmailClassName = `profile-form__input${
    errors.email && isDirty ? " profile-form__input_error" : ""
  }`;

  const submitBtnClassName = `profile-form__submit ${
    !isValid ||
    (currentUser.name === inputValues.name &&
      currentUser.email === inputValues.email)
      ? "profile-form__submit_disabled"
      : "opacity"
  }`;

  return (
    <section className="profile">
      <form
        className="profile-form"
        name="profile"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="profile-form__title">Привет, Роман</h1>
        <fieldset className="profile-form__fieldset">
          <label className="profile-form__lable">
            Имя
            <input
              className={inputNameClassName}
              type="text"
              placeholder="Здесь должно быть ваше имя"
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
                pattern: {
                  // eslint-disable-next-line no-useless-escape
                  value: /^[a-zа-я\s-]{1,}$/gi,
                  message:
                    "Имя содержит только латинские символы, кирилицу, пробел или дефис",
                },
              })}
            />
            <span className="profile-form__error profile-form__error_name">
              {errors?.name?.message}
            </span>
          </label>
          <label className="profile-form__lable">
            E-mail
            <input
              className={inputEmailClassName}
              type="email"
              placeholder="Здесь должен быть ваш email"
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
            <span className="profile-form__error profile-form__error_email">
              {errors?.email?.message}
            </span>
          </label>
        </fieldset>

        <div className="profile-form__bottom">
          <input
            className={submitBtnClassName}
            type="submit"
            name="submit"
            value="Редактировать"
            disabled={
              !isValid ||
              (currentUser.name === inputValues.name &&
                currentUser.email === inputValues.email)
            }
          />
          <Link
            className="profile-form__link opacity"
            to="/"
            onClick={handlerLogout}
          >
            Выйти из аккаунта
          </Link>
        </div>
      </form>
    </section>
  );
}

export default Profile;
