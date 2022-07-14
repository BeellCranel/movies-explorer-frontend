import "./Cards.scss";
import words from "../../images/optimized/container/33-words-pic.jpg";
import years from "../../images/optimized/container/100-years.jpg";
import benksi from "../../images/optimized/container/benksi.jpg";
import reality from "../../images/optimized/container/raliti-explotion.jpg";
import run from "../../images/optimized/container/run-is-a-fridom.jpg";

function Cards() {
  return (
    <section className="cards">
      <article className="card">
        <button className="card__save-btn card__save-btn_active" type="button">
          Сохранить
        </button>
        <img className="card__image" src={words} alt="33 слова о дизайне" />
        <div className="card__description">
          <h2 className="card__description_title">33 слова о дизайне</h2>
          <p className="card__description_duration">1ч 17м</p>
        </div>
      </article>
      <article className="card">
        <button className="card__save-btn" type="button">
          Сохранить
        </button>
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
        <button className="card__save-btn" type="button">
          Сохранить
        </button>
        <img className="card__image" src={benksi} alt="В погоне за Бенкси" />
        <div className="card__description">
          <h2 className="card__description_title">В погоне за Бенкси</h2>
          <p className="card__description_duration">1ч 17м</p>
        </div>
      </article>
      <article className="card">
        <button className="card__save-btn" type="button">
          Сохранить
        </button>
        <img
          className="card__image"
          src={reality}
          alt="Баския: Взрыв реальности"
        />
        <div className="card__description">
          <h2 className="card__description_title">Баския: Взрыв реальности</h2>
          <p className="card__description_duration">1ч 17м</p>
        </div>
      </article>
      <article className="card">
        <button className="card__save-btn" type="button">
          Сохранить
        </button>
        <img className="card__image" src={run} alt="Бег это свобода" />
        <div className="card__description">
          <h2 className="card__description_title">Бег это свобода</h2>
          <p className="card__description_duration">1ч 17м</p>
        </div>
      </article>
    </section>
  );
}

export default Cards;
