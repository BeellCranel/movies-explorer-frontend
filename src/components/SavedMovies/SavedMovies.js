import "./SavedMovies.scss";
import SearchForm from "../SearchForm/SearchForm";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import { movies } from "../../utils/constans";

function SavedMovies({ isFilterMovies, changeFilter }) {
  const savedMovies = movies
    .filter((card) => card.saved)
    .map((card, i) => {
      return (
        <Card
          link={card.link}
          name={card.name}
          duration={card.duration}
          btnClassName="del-btn opacity"
          key={i}
        />
      );
    });

  return (
    <>
      <main className="content">
        <SearchForm
          isFilterMovies={isFilterMovies}
          changeFilter={changeFilter}
        />
        <section className="cards">{savedMovies}</section>
        <div className="more-btn">
          <button className="more-btn__btn_hidden" type="button">
            Ещё
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
