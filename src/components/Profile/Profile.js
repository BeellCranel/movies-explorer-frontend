import "./Profile.scss";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Profile() {
  const [userData, setUserData] = useState({
    name: "Roman",
    email: "test@test.ru",
  });
  const {
    register,
    formState: { errors, isValid, isDirty },
    handleSubmit,
    reset,
    watch,
  } = useForm();
  const [disabled, setDisabled] = useState(false);
  const inputValues = watch();

  function onSubmit(data) {
    setUserData({
      name: data.name,
      email: data.email,
    });
    reset();
  }

  useEffect(() => {
    if (
      userData.name === inputValues.name &&
      userData.email === inputValues.email
    ) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValues]);

  const inputNameClassName = `profile-form__input${
    errors.name && isDirty ? " profile-form__input_error" : ""
  }`;

  const inputEmailClassName = `profile-form__input${
    errors.email && isDirty ? " profile-form__input_error" : ""
  }`;

  const submitBtnClassName = `profile-form__submit ${
    !isValid || disabled ? "profile-form__submit_disabled" : "opacity"
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
              defaultValue={userData.name}
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
              defaultValue={userData.email}
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
            disabled={!isValid || disabled}
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
