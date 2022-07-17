import "./Card.scss";

function Card({ link, name, duration, btnClassName }) {
  return (
    <article className="card">
      <button className={btnClassName}>Сохранить</button>
      <img className="card__image" src={link} alt={name} />
      <div className="card__description">
        <h2 className="card__description_title">{name}</h2>
        <p className="card__description_duration">{duration}</p>
      </div>
    </article>
  );
}

export default Card;
