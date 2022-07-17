import "./NavPopup.scss";
import { Link } from "react-router-dom";

function NavPopup() {
  return (
    <div className="nav-popup">
      <div className="nav-popup__container">
        <button className="nav-popup__close-btn opacity" />
        <nav className="nav-popup__menu">
          <ul className="nav-popup__list">
            <li className="nav-popup__item">
              <Link className="nav-popup__link opacity" to="/">
                Главная
              </Link>
            </li>
            <li className="nav-popup__item">
              <Link className="nav-popup__link opacity" to="/movies">
                Фильмы
              </Link>
            </li>
            <li className="nav-popup__item">
              <Link className="nav-popup__link opacity" to="/saved-movies">
                Сохранённые фильмы
              </Link>
            </li>
          </ul>
        </nav>
        <Link
          className="nav-popup__link nav-popup__link_profile opacity"
          to="/saved-movies"
        >
          <div className="acc-icon" />
          Аккаунт
        </Link>
      </div>
    </div>
  );
}

export default NavPopup;
