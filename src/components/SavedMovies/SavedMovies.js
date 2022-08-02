import "./SavedMovies.scss";
import React, { useState, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../../vendor/Preloader/Preloader";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

function SavedMovies({
  filterState,
  isLoading,
  changeFilter,
  movies,
  searchSubmit,
  savedMovies,
  errorMessage,
  searchMessage,
  searchWord,
  resetSearchResult,
  onDel,
}) {
  const [numberMoviesView, setNumberView] = useState();
  const [addMoviesView, setAddMoviesView] = useState();

  const visibleMovies = movies.slice(0, numberMoviesView);
  const cardEl = visibleMovies.map((movie) => {
    return (
      <Card
        isMovies={false}
        movie={movie}
        savedMovies={savedMovies}
        key={movie._id}
        onDel={onDel}
      />
    );
  });
  const visibleContent = isLoading ? (
    <Preloader />
  ) : errorMessage.state ? (
    <ErrorMessage error={errorMessage} />
  ) : searchMessage.state ? (
    <ErrorMessage error={searchMessage} />
  ) : (
    cardEl
  );
  const moreBtnClassName = `more-btn__btn${
    visibleMovies.length < movies.length ? " opacity" : " more-btn__btn_hidden"
  }`;

  useEffect(() => {
    window.addEventListener("resize", onChangeScreenWidth);
  }, []);

  useEffect(() => {
    if (isLoading) {
      onChangeScreenWidth();
    }
  }, [isLoading]);

  function onChangeScreenWidth() {
    const windowWidth = window.innerWidth;
    if (windowWidth > 1279) {
      setNumberView(15);
      setAddMoviesView(3);
    } else if (windowWidth >= 806) {
      setNumberView(12);
      setAddMoviesView(2);
    } else if (windowWidth >= 624) {
      setNumberView(8);
      setAddMoviesView(2);
    } else {
      setNumberView(5);
      setAddMoviesView(2);
    }
  }

  function addMoviesInCollectionVisible() {
    setNumberView((prevState) => prevState + addMoviesView);
  }
  return (
    <>
      <main className="content">
        <SearchForm
          filterState={filterState}
          changeFilter={changeFilter}
          searchSubmit={searchSubmit}
          searchWord={searchWord}
          resetSearchResult={resetSearchResult}
          isMovies={false}
        />
        <section className="cards">{visibleContent}</section>
        <div className="more-btn">
          <button
            className={moreBtnClassName}
            type="button"
            onClick={addMoviesInCollectionVisible}
            disabled={visibleMovies.length >= movies.length}
          >
            Ещё
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
