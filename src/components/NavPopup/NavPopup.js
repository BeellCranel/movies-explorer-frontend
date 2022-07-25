import "./NavPopup.scss";
import { Link } from "react-router-dom";

function NavPopup({ isOpen, onClose }) {
  const navPopupClassName = `nav-popup${isOpen ? " nav-popup__opened" : ""}`;
  function handleOnClose(e) {
    if (e.target.classList.contains("nav-popup__opened")) {
      onClose();
    }
  }

  return (
    <div className={navPopupClassName} onClick={handleOnClose}>
      <div className="nav-popup__container">
        <button className="nav-popup__close-btn opacity" onClick={onClose} />
        <nav className="nav-popup__menu">
          <ul className="nav-popup__list">
            <li className="nav-popup__item">
              <Link
                className="nav-popup__link opacity"
                to="/"
                onClick={onClose}
              >
                Главная
              </Link>
            </li>
            <li className="nav-popup__item">
              <Link
                className="nav-popup__link opacity"
                to="/movies"
                onClick={onClose}
              >
                Фильмы
              </Link>
            </li>
            <li className="nav-popup__item">
              <Link
                className="nav-popup__link opacity"
                to="/saved-movies"
                onClick={onClose}
              >
                Сохранённые фильмы
              </Link>
            </li>
          </ul>
        </nav>
        <Link
          className="nav-popup__link nav-popup__link_profile opacity"
          to="/profile"
          onClick={onClose}
        >
          <div className="acc-icon" />
          Аккаунт
        </Link>
      </div>
    </div>
  );
}

export default NavPopup;
