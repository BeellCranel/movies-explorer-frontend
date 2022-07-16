import "./CardsSaved.scss";
import words from "../../images/optimized/container/33-words-pic.jpg";
import years from "../../images/optimized/container/100-years.jpg";
import benksi from "../../images/optimized/container/benksi.jpg";

function CardsSaved() {
  return (
    <section className="cards cards__saved">
      <article className="card">
        <button className="card__del-btn opacity" type="button" />
        <img className="card__image" src={words} alt="33 слова о дизайне" />
        <div className="card__description">
          <h2 className="card__description_title">33 слова о дизайне</h2>
          <p className="card__description_duration">1ч 17м</p>
        </div>
      </article>
      <article className="card">
        <button className="card__del-btn opacity" type="button" />
        <img
          className="card__image"
          src={years}
          alt="Киноальманах «100 лет дизайна»"
        />
        <div className="card__description">
          <h2 className="card__description_title">
            Киноальманах «100 лет дизайна»
          </h2>
          <p className="card__description_duration">1ч 17м</p>
        </div>
      </article>
      <article className="card">
        <button className="card__del-btn opacity" type="button" />
        <img className="card__image" src={benksi} alt="В погоне за Бенкси" />
        <div className="card__description">
          <h2 className="card__description_title">В погоне за Бенкси</h2>
          <p className="card__description_duration">1ч 17м</p>
        </div>
      </article>
    </section>
  );
}

export default CardsSaved;
