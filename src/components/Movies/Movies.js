import "./Movies.scss";
import SearchForm from "../SearchForm/SearchForm";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import { movies } from "../../utils/constans";

function Movies() {
  const cardEl = movies.map((card, i) => {
    const elBtnClassName = `save-btn ${
      card.saved ? "save-btn__saved" : "opacity"
    }`;

    return (
      <Card
        link={card.link}
        name={card.name}
        duration={card.duration}
        btnClassName={elBtnClassName}
        key={i}
      />
    );
  });

  return (
    <>
      <main className="content">
        <SearchForm />
        <section className="cards">
          {cardEl}
          <div className="more-btn">
            <button className="more-btn__btn opacity" type="button">
              Ещё
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Movies;
