import "./Student.scss";
import foto from "../../images/optimized/portfolio-pic.jpg";

function Student() {
  return (
    <section id="student" className="student">
      <h2 className="student__title">Студент</h2>

      <section className="student__about">
        <img
          className="student__about_foto"
          src={foto}
          alt="Фотография автора"
        />
        <div className="student__about_img-caption">
          <h3 className="student__about_title">Роман</h3>
          <p className="student__about_subtitle">
            Фронтенд-разработчик, 27 лет
          </p>
          <p className="student__about_description">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <footer className="student__about_contacts">
            <nav className="student__about_nav">
              <ul className="student__about_menu">
                <li className="student__about_item">
                  <a className="student__about_link" href="#">
                    Facebook
                  </a>
                </li>
                <li className="student__about_item">
                  <a className="student__about_link" href="#">
                    Github
                  </a>
                </li>
              </ul>
            </nav>
          </footer>
        </div>
      </section>

      <section className="student__portfolio">
        <h3 className="student__portfolio_title">Портфолио</h3>
        <nav className="student__portfolio_nav">
          <ul className="student__portfolio_menu">
            <li className="student__portfolio_item">
              <a className="student__portfolio_link" href="#">
                Статичный сайт
              </a>
              <a className="student__portfolio_link" href="#">
                ↗
              </a>
            </li>
            <li className="student__portfolio_item">
              <a className="student__portfolio_link" href="#">
                Адаптивный сайт
              </a>
              <a className="student__portfolio_link" href="#">
                ↗
              </a>
            </li>
            <li className="student__portfolio_item">
              <a
                className="student__portfolio_link"
                href="https://github.com/BeellCranel/react-mesto-auth"
              >
                Одностраничное приложение
              </a>
              <a className="student__portfolio_link" href="#">
                ↗
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </section>
  );
}

export default Student;
