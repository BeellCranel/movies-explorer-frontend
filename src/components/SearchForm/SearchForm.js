import "./SearchForm.scss";
import React, { useState } from "react";
import CustomCheckBox from "../CustomCheckBox/CustomCheckBox";

function SearchForm() {
  const [movieData, setMovieData] = useState("");

  function handleChangeMovie(e) {
    setMovieData(e.target.value);
  }
  return (
    <section className="search-form">
      <form className="search-form__form-container">
        <fieldset className="search-form__fieldset">
          <input
            className="search-form__el search-form__el_input"
            id="search-movie"
            type="text"
            name="movie"
            value={movieData}
            onChange={handleChangeMovie}
            placeholder="Фильм"
            required
          />
          <input
            className="search-form__el search-form__el_submit opacity"
            type="submit"
            name="submit"
            value="Найти"
          />
        </fieldset>
        <CustomCheckBox />
      </form>
    </section>
  );
}

export default SearchForm;
