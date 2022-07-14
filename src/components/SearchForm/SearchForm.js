import "./SearchForm.scss";
import CustomCheckBox from "../CustomCheckBox/CustomCheckBox";

function SearchForm() {
  return (
    <section className="search-form">
      <form className="search-form__form-container">
        <fieldset className="search-form__fieldset">
          <input
            className="search-form__el search-form__el_input"
            id="search-movie"
            type="text"
            name="movie"
            value=""
            placeholder="Фильм"
          />
          <input
            className="search-form__el search-form__el_submit"
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
