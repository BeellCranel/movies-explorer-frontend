import "./CardsSaved.scss";
import { movies } from "../../utils/constans";
import Card from "../Card/Card";

function CardsSaved() {
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
    <section className="cards cards__saved">{savedMovies}</section>
  );
}

export default CardsSaved;
