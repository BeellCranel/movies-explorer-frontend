import "./SavedMovies.scss";
import SearchForm from "../SearchForm/SearchForm";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import { movies } from "../../utils/constans";

function SavedMovies() {
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
        <SearchForm />
        <section className="cards cards__saved">{savedMovies}</section>
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
