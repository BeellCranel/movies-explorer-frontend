import "./Cards.scss";
import words from "../../images/optimized/container/33-words-pic.jpg";
import years from "../../images/optimized/container/100-years.jpg";
import benksi from "../../images/optimized/container/benksi.jpg";
import reality from "../../images/optimized/container/raliti-explotion.jpg";
import run from "../../images/optimized/container/run-is-a-fridom.jpg";
import booksellers from "../../images/optimized/container/booksellers.jpg";
import germanyAtNight from "../../images/optimized/container/germany-at-night.jpg";
import gimmeDander from "../../images/optimized/container/gimme-danger.jpg";
import littleGirl from "../../images/optimized/container/little-girl.jpg";
import beforeTheJump from "../../images/optimized/container/before-the-jump.jpg";
import piJHarvy from "../../images/optimized/container/pi-j-harvy.jpg";
import onTheWaves from "../../images/optimized/container/on-the-waves.jpg";

function Cards() {
  return (
    <section className="cards">
      <article className="card">
        <div className="card__saved" />
        <img className="card__image" src={words} alt="33 слова о дизайне" />
        <div className="card__description">
          <h2 className="card__description_title">33 слова о дизайне</h2>
          <p className="card__description_duration">1ч 17м</p>
        </div>
      </article>
      <article className="card">
        <div className="card__saved" />
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
        <div className="card__saved" />
        <img className="card__image" src={benksi} alt="В погоне за Бенкси" />
        <div className="card__description">
          <h2 className="card__description_title">В погоне за Бенкси</h2>
          <p className="card__description_duration">1ч 17м</p>
        </div>
      </article>
      <article className="card">
        <button className="card__save-btn opacity" type="button">
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
        <button className="card__save-btn opacity" type="button">
          Сохранить
        </button>
        <img className="card__image" src={run} alt="Бег это свобода" />
        <div className="card__description">
          <h2 className="card__description_title">Бег это свобода</h2>
          <p className="card__description_duration">1ч 17м</p>
        </div>
      </article>
      <article className="card">
        <button className="card__save-btn opacity" type="button">
          Сохранить
        </button>
        <img className="card__image" src={booksellers} alt="Книготорговцы" />
        <div className="card__description">
          <h2 className="card__description_title">Книготорговцы</h2>
          <p className="card__description_duration">1ч 17м</p>
        </div>
      </article>
      <article className="card">
        <button className="card__save-btn opacity" type="button">
          Сохранить
        </button>
        <img
          className="card__image"
          src={germanyAtNight}
          alt="Когда я думаю о Германии ночью"
        />
        <div className="card__description">
          <h2 className="card__description_title">
            Когда я думаю о Германии ночью
          </h2>
          <p className="card__description_duration">1ч 17м</p>
        </div>
      </article>
      <article className="card">
        <button className="card__save-btn opacity" type="button">
          Сохранить
        </button>
        <img
          className="card__image"
          src={gimmeDander}
          alt="Gimme Danger: История Игги и The Stooges"
        />
        <div className="card__description">
          <h2 className="card__description_title">
            Gimme Danger: История Игги и The Stooges
          </h2>
          <p className="card__description_duration">1ч 17м</p>
        </div>
      </article>
      <article className="card">
        <button className="card__save-btn opacity" type="button">
          Сохранить
        </button>
        <img
          className="card__image"
          src={littleGirl}
          alt="Дженис: Маленькая девочка грустит"
        />
        <div className="card__description">
          <h2 className="card__description_title">
            Дженис: Маленькая девочка грустит
          </h2>
          <p className="card__description_duration">1ч 17м</p>
        </div>
      </article>
      <article className="card">
        <button className="card__save-btn opacity" type="button">
          Сохранить
        </button>
        <img
          className="card__image"
          src={beforeTheJump}
          alt="Соберись перед прыжком"
        />
        <div className="card__description">
          <h2 className="card__description_title">Соберись перед прыжком</h2>
          <p className="card__description_duration">1ч 17м</p>
        </div>
      </article>
      <article className="card">
        <button className="card__save-btn opacity" type="button">
          Сохранить
        </button>
        <img
          className="card__image"
          src={piJHarvy}
          alt="Пи Джей Харви: A dog called money"
        />
        <div className="card__description">
          <h2 className="card__description_title">
            Пи Джей Харви: A dog called money
          </h2>
          <p className="card__description_duration">1ч 17м</p>
        </div>
      </article>
      <article className="card">
        <button className="card__save-btn opacity" type="button">
          Сохранить
        </button>
        <img
          className="card__image"
          src={onTheWaves}
          alt="По волнам: Искусство звука в кино"
        />
        <div className="card__description">
          <h2 className="card__description_title">
            По волнам: Искусство звука в кино
          </h2>
          <p className="card__description_duration">1ч 17м</p>
        </div>
      </article>
    </section>
  );
}

export default Cards;
