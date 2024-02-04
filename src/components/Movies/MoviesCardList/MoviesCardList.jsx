import "./movie-card.css";
// import simple from './../../../images/about-me-photo.jpg';
import React from "react";

export default function MoviesCardList({ movie }) {
  const hours = Math.floor(movie.duration / 60);
  const minutes = movie.duration % 60;

  const formattedDuration = `${hours}ч ${minutes}м`;

  return (
    <div className="movie-card">
      <button className="movie-card__button movie-card__button_save">
        Сохранить
      </button>
      <button className="movie-card__button movie-card__button_saved"></button>
      <button className="movie-card__button movie-card__button_delete"></button>
      <a
        href={movie.trailerLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={`https://api.nomoreparties.co/${movie.image.url}`}
          alt="Фильм"
          className="movie-card__img"
        />
      </a>
      <div className="movie-card__information">
        <p className="movie-card__description">{movie.nameRU}</p>
        <p className="movie-card__duration">{formattedDuration}</p>
      </div>
    </div>
  );
}
