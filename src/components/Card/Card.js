import "./Card.scss";
import React, { useState, useEffect } from "react";

function Card({ isMovies, movie, savedMovies, onSave, onDel }) {
  const [isLiked, setIsLiked] = useState();
  const saveBtnClassName = `save-btn${
    isLiked ? " save-btn__saved  opacity" : " opacity"
  }`;
  const delBtnClasName = "del-btn opacity";
  const currentLocButton = isMovies ? saveBtnClassName : delBtnClasName;
  const card = {
    country: movie.country || "нет",
    director: movie.director || "Нет",
    duration: movie.duration || 0,
    year: movie.year || "Нет",
    description: movie.description || "Нет",
    image: isMovies
      ? `https://api.nomoreparties.co${movie.image.url}`
      : movie.image,
    trailerLink: movie.trailerLink,
    nameRU: movie.nameRU || "Нет",
    nameEN: movie.nameEN || "Нет",
    thumbnail: isMovies
      ? `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`
      : movie.thumbnail,
    movieId: isMovies ? movie.id : movie._id,
  };
  const durationMovie = `${Math.trunc(card.duration / 60)}ч ${
    card.duration % 60
  }м`;

  useEffect(() => {
    if (isMovies && searchCurSavedMovie()) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isMovies && searchCurSavedMovie()) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [savedMovies]);

  function searchCurSavedMovie() {
    return savedMovies.find((item) => item.nameRU === movie.nameRU);
  }

  function handleLikeOrDel() {
    if (isLiked) {
      const movie = searchCurSavedMovie();
      onDel(movie._id);
    } else {
      onSave(card);
    }
  }

  function handleDelete() {
    onDel(card.movieId);
  }

  return (
    <article className="card" id={card.movieId}>
      <button
        className={currentLocButton}
        type="button"
        onClick={isMovies ? handleLikeOrDel : handleDelete}
      >
        Сохранить
      </button>
      <a
        className="card__link"
        href={card.trailerLink}
        target="_blank"
        rel="noreferrer"
      >
        <img className="card__image" src={card.image} alt={card.nameRU} />
      </a>
      <div className="card__description">
        <h2 className="card__description_title">{card.nameRU}</h2>
        <p className="card__description_duration">{durationMovie}</p>
      </div>
    </article>
  );
}

export default Card;
