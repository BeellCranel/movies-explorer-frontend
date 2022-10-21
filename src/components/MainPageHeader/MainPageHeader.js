import "./MainPageHeader.scss";

function MainPageNav() {
  return (
    <header className="main-page-header">
      <div className="main-page-header__container">
        <h1 className="main-page-header__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>

        <nav className="main-page-header__nav-menu">
          <ul className="main-page-header__menu">
            <li className="main-page-header__menu_item">
              <a href="#about" className="main-page-header__menu_link opacity">
                О проекте
              </a>
            </li>
            <li className="main-page-header__menu_item">
              <a
                href="#technologies"
                className="main-page-header__menu_link opacity"
              >
                Технологии
              </a>
            </li>
            <li className="main-page-header__menu_item">
              <a
                href="#student"
                className="main-page-header__menu_link opacity"
              >
                Студент
              </a>
            </li>
          </ul>
        </nav>
        <div className="main-page-header__square main-page-header__square-one">
          <div className="main-page-header__square main-page-header__square-two">
            <div className="main-page-header__square main-page-header__square-three">
              <div className="main-page-header__square main-page-header__square-four" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default MainPageNav;
