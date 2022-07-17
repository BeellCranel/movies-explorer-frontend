import "./Cards.scss";
import { movies } from "../../utils/constans";
import Card from "../Card/Card";

function Cards() {
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

  return <section className="cards">{cardEl}</section>;
}

export default Cards;
