import "./SearchForm.scss";
import { useForm } from "react-hook-form";
import CustomCheckBox from "../CustomCheckBox/CustomCheckBox";

function SearchForm({ isFilterMovies, changeFilter, searchSubmit }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  function onSubmit(data) {
    searchSubmit(data.movie);
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
