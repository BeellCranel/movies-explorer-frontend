import "./NavEl.scss";
import { Link } from "react-router-dom";

function NavEl() {
  return (
    <>
      <Link
        className="menu__item menu__item_movies menu__item_closing"
        to="/movies"
      >
        Фильмы
      </Link>
      <Link
        className="menu__item menu__item_saved menu__item_closing"
        to="/saved-movies"
      >
        Сохранённые фильмы
      </Link>
      <Link
        className="menu__item menu__item_account menu__item_closing"
        to="/profile"
      >
        Аккаунт
      </Link>
      <button className="buttonClassName" type="button" />
    </>
  );
}

export default NavEl;
