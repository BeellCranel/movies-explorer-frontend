import React, { useEffect, useState, useRef } from "react";
import "./MainPageHeader.scss";

function MainPageNav({ goToHeader, goToAbout, goToTechnologies, goToStudent }) {
  const [isBackActive, setIsBackActive] = useState(false);
  const backRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (!entry.isIntersecting) {
        setIsBackActive(true);
      } else {
        setIsBackActive(false);
      }
    });
    observer.observe(backRef.current);
  }, []);

  const backClassName = `main-page-header__menu_item-back ${
    isBackActive ? "" : "hide"
  }`;
  return (
    <header ref={backRef} className="main-page-header">
      <div className="main-page-header__container">
        <h1 className="main-page-header__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>

        <nav className="main-page-header__nav-menu">
          <ul className="main-page-header__menu">
            <li className={backClassName}>
              <div
                onClick={goToHeader}
                className="main-page-header__menu_link main-page-header__menu_link_back opacity"
              >
                В начало
              </div>
            </li>
            <li className="main-page-header__menu_item">
              <div
                onClick={goToAbout}
                className="main-page-header__menu_link opacity"
              >
                О проекте
              </div>
            </li>
            <li className="main-page-header__menu_item">
              <div
                onClick={goToTechnologies}
                className="main-page-header__menu_link opacity"
              >
                Технологии
              </div>
            </li>
            <li className="main-page-header__menu_item">
              <div
                onClick={goToStudent}
                className="main-page-header__menu_link opacity"
              >
                Студент
              </div>
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
