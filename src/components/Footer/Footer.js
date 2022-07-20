import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__container">
        <nav className="footer__nav">
          <ul className="footer__nav_menu">
            <li className="footer__nav_item">
              <a
                className="footer__nav_link opacity"
                href="https://practicum.yandex.ru/"
                target="_blank"
                rel="noreferrer"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer__nav_item">
              <a
                className="footer__nav_link opacity"
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                lang="en"
              >
                Github
              </a>
            </li>
            <li className="footer__nav_item">
              <a
                className="footer__nav_link opacity"
                href="https://vk.com/yandex.practicum"
                target="_blank"
                rel="noreferrer"
                lang="en"
              >
                VKontakte
              </a>
            </li>
          </ul>
        </nav>
        <p className="footer__author">&copy; 2022. Роман Дергач</p>
      </div>
    </footer>
  );
}

export default Footer;
