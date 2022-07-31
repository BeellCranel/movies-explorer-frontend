import "./SearchForm.scss";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import CustomCheckBox from "../CustomCheckBox/CustomCheckBox";

function SearchForm({
  isFilterMovies,
  changeFilter,
  searchSubmit,
  searchWord,
  resetSearchResult,
  isMovies,
}) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    watch,
  } = useForm();
  const inputValues = watch();
  const delBtnClassName = `search-form__del-btn${
    inputValues.movie ? " opacity" : "_hidden"
  }`;

  useEffect(() => {
    setValue("movie", searchWord.word);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchWord]);

  function onSubmit(data) {
    searchSubmit(data.movie);
  }

  function clearInput() {
    resetSearchResult(isMovies);
  }
  return (
    <section className="search-form">
      <form
        className="search-form__form-container"
        onSubmit={handleSubmit(onSubmit)}
      >
        <fieldset className="search-form__fieldset">
          <input
            className="search-form__el search-form__el_input"
            placeholder="Фильм"
            {...register("movie", {
              required: "Нужно ввести ключевое слово",
            })}
          />
          <input
            className="search-form__el search-form__el_submit opacity"
            type="submit"
            value="Найти"
          />
          <button
            className={delBtnClassName}
            type="button"
            onClick={clearInput}
          />
        </fieldset>
        <span className="search-form__error">{errors?.movie?.message}</span>
        <CustomCheckBox
          isFilterMovies={isFilterMovies}
          changeFilter={changeFilter}
        />
      </form>
    </section>
  );
}

export default SearchForm;
