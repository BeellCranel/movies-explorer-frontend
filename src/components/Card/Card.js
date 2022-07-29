import "./Card.scss";
import { useLocation } from "react-router-dom";

function Card({ id, image, trailer, name, duration, savedMovies }) {
  const location = useLocation();

  const saveBtnClassName = `save-btn${
    savedMovies.indexOf(id) !== -1 ? " save-btn__saved" : " opacity"
  }`;
  const delBtnClasName = "del-btn opacity";
  const currentLocButton = location.pathname === "/movies" ? saveBtnClassName : delBtnClasName;

  const durationMovie = `${Math.trunc(duration / 60)}ч ${
    duration % 60
  }м`;

  return (
    <article className="card" id={id}>
      <button className={currentLocButton} type="button">Сохранить</button>
      <a className="card__link" href={trailer} target="_blank" rel="noreferrer">
        <img className="card__image" src={image} alt={name} />
      </a>
      <div className="card__description">
        <h2 className="card__description_title">{name}</h2>
        <p className="card__description_duration">{durationMovie}</p>
      </div>
    </article>
  );
}

export default Card;
