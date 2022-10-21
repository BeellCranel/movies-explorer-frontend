import "./Student.scss";
import photo from "../../images/optimized/киса.jpg";

function Student() {
  return (
    <section id="student" className="student">
      <h2 className="student__title">Студент</h2>

      <section className="student__about">
        <img
          className="student__about_photo"
          src={photo}
          alt="Фотография автора"
        />
        <div className="student__about_img-caption">
          <h3 className="student__about_title">Роман</h3>
          <p className="student__about_subtitle">
            Фронтенд-разработчик, 27 лет
          </p>
          <p className="student__about_description">
            На мысль о возможности развиваться как разработчик меня вдохновил
            мой друг. Я аккуратно присмотрелся к разным направлениям, и самый
            большой интерес у меня вызвала Веб-разработка. За время обучения я
            убедился в том, что это по-настоящему увлекательная профессия.
          </p>
          <footer className="student__about_contacts">
            <nav className="student__about_nav">
              <ul className="student__about_menu">
                <li className="student__about_item">
                  <a
                    className="student__about_link opacity"
                    href="https://vk.com/dergach_rs"
                    target="_blank"
                    rel="noreferrer"
                    lang="en"
                  >
                    VKontakte
                  </a>
                </li>
                <li className="student__about_item">
                  <a
                    className="student__about_link opacity"
                    href="https://github.com/BeellCranel"
                    target="_blank"
                    rel="noreferrer"
                    lang="en"
                  >
                    Github
                  </a>
                </li>
              </ul>
            </nav>
          </footer>
        </div>
      </section>

      <section className="student__portfolio">
        <h3 className="student__portfolio_title">Портфолио:</h3>
        <nav className="student__portfolio_nav">
          <ol className="student__portfolio_menu">
            <li className="student__portfolio_item">
              <h3 className="student__portfolio_item-title">
                Одностраничное приложение.
              </h3>
              <p className="student__portfolio_item-subtitle">
                Интерактивная страница, где можно регистрироваться, добавлять
                фотографии, удалять их и ставить лайки.
              </p>
              <div className="student__portfolio_link-wrapper">
                <a
                  className="student__portfolio_link opacity"
                  href="https://react-mesto-auth.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                  lang="en"
                >
                  Watch cite
                </a>
                <a
                  className="student__portfolio_link opacity"
                  href="https://github.com/BeellCranel/react-mesto-auth"
                  target="_blank"
                  rel="noreferrer"
                >
                  Repository
                </a>
              </div>
            </li>
            <li className="student__portfolio_item">
              <h3 className="student__portfolio_item-title">
                Адаптивный сайт.
              </h3>
              <p className="student__portfolio_item-subtitle">
                Проект о путешествии по России. Сайт сделан по макету в Фигме,
                соблюдая все разрешения экранов. И немого добавил от себя в
                промежутке от 424px и 768px.
              </p>
              <div className="student__portfolio_link-wrapper">
                <a
                  className="student__portfolio_link opacity"
                  href="https://beellcranel.github.io/russian-travel/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Watch cite
                </a>
                <a
                  className="student__portfolio_link opacity"
                  href="https://github.com/BeellCranel/russian-travel"
                  target="_blank"
                  rel="noreferrer"
                >
                  Repository
                </a>
              </div>
            </li>
            <li className="student__portfolio_item">
              <h3 className="student__portfolio_item-title">Статичный сайт.</h3>
              <p className="student__portfolio_item-subtitle">
                Статичный сайт с семантической версткой, использованием
                анимации.
              </p>
              <div className="student__portfolio_link-wrapper">
                <a
                  className="student__portfolio_link opacity"
                  href="https://beellcranel.github.io/how-to-learn/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Watch cite
                </a>
                <a
                  className="student__portfolio_link opacity"
                  href="https://github.com/BeellCranel/how-to-learn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Repository
                </a>
              </div>
            </li>
          </ol>
        </nav>
      </section>
    </section>
  );
}

export default Student;
