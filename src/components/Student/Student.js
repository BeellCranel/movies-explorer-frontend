import "./Student.scss";
import foto from "../../images/optimized/golfer.jpg";

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
            Я родился в городе Бишкек республика Киргизия, а в 4 года переехал в
            Москву. Закончил Экономико-технологический колледж № 22 по профессии
            Повар-кондитер, после чего отслужил в армии. До недавнего времени я
            работал в сфере обслуживания. Последнее место работы Гольф-клуб
            "Сколково", по должности "ведущий гольф-распорядитель".
          </p>
          <p className="student__about_description">
            Пару лет назад я начал обучаться программированию. На мысль о
            возможности развиваться как разработчик меня вдохновил мой друг,
            который на тот момент уже работал в IT и регулярно делился
            впечатлениями. Я аккуратно присмотрелся к разным направлениям, и
            самый большой интерес у меня вызвала Веб-разработка. За время
            обучения я убедился в том, что это по-настоящему увлекательная
            профессия.
          </p>
          <footer className="student__about_contacts">
            <nav className="student__about_nav">
              <ul className="student__about_menu">
                <li className="student__about_item">
                  <a
                    className="student__about_link opacity"
                    href="https://vk.com/mine666"
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
        <h3 className="student__portfolio_title">Портфолио</h3>
        <nav className="student__portfolio_nav">
          <ul className="student__portfolio_menu">
            <li className="student__portfolio_item">
              <a
                className="student__portfolio_link opacity"
                href="https://mesto-react-auth.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                Одностраничное приложение
              </a>
              <a
                className="student__portfolio_link opacity"
                href="https://mesto-react-auth.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                ↗
              </a>
            </li>
            <li className="student__portfolio_item">
              <a
                className="student__portfolio_link opacity"
                href="https://beellcranel.github.io/russian-travel/"
                target="_blank"
                rel="noreferrer"
              >
                Адаптивный сайт
              </a>
              <a
                className="student__portfolio_link opacity"
                href="https://beellcranel.github.io/russian-travel/"
                target="_blank"
                rel="noreferrer"
              >
                ↗
              </a>
            </li>
            <li className="student__portfolio_item">
              <a
                className="student__portfolio_link opacity"
                href="https://beellcranel.github.io/how-to-learn/"
                target="_blank"
                rel="noreferrer"
              >
                Статичный сайт
              </a>
              <a
                className="student__portfolio_link opacity"
                href="https://beellcranel.github.io/how-to-learn/"
                target="_blank"
                rel="noreferrer"
              >
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
