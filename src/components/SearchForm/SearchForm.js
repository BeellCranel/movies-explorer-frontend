import "./SearchForm.scss";
import { useForm } from "react-hook-form";
import CustomCheckBox from "../CustomCheckBox/CustomCheckBox";

function SearchForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  function onSubmit(data) {
    console.log(data);
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
        <CustomCheckBox />
      </form>
    </section>
  );
}

export default SearchForm;
