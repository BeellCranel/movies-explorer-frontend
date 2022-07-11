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
              <a className="footer__nav_link" href="#">
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer__nav_item">
              <a className="footer__nav_link" href="#">
                Github
              </a>
            </li>
            <li className="footer__nav_item">
              <a className="footer__nav_link" href="#">
                Facebook
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
