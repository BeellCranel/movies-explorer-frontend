import "./MainPageNav.scss";

function MainPageNav() {
  return (
    <header className="main-page-nav">
      <div className="main-page-nav__container">
        <h1 className="main-page-nav__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>

        <nav className="main-page-nav__nav-menu">
          <ul className="nav-menu">
            <li className="nav-menu__item">
              <a href="#" className="nav-menu__link">
                О проекте
              </a>
            </li>
            <li className="nav-menu__item">
              <a href="#" className="nav-menu__link">
                Технологии
              </a>
            </li>
            <li className="nav-menu__item">
              <a href="#" className="nav-menu__link">
                Студент
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default MainPageNav;
