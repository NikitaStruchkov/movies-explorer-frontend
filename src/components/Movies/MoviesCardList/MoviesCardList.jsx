import "./movie-card.css";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function MoviesCardList({ movie, handleLike,handleDelete, isLiked }) {
  const hours = Math.floor(movie.duration / 60);
  const minutes = movie.duration % 60;
  const formattedDuration = `${hours}ч ${minutes}м`;
  const location = useLocation();

  const [isSaved, setSaved] = useState(isLiked);
  

  function handleLikeMovie() {
    handleLike(movie, isSaved);
    setSaved(!isSaved);
    
  }

  function handleDeleteMovie() {
    handleDelete(movie);
    setSaved(!isSaved);
  }

  useEffect(() => { 
    console.log(isSaved);
  }, [isSaved])
  


  return (
    <div className="movie-card">
      {location.pathname === "/saved-movies" ? (
        <button
          className="movie-card__button movie-card__button_delete"
          onClick={handleDeleteMovie}
        ></button>
      ) : (
        <button
          className={`movie-card__button ${isSaved ? 'movie-card__button_saved' : 'movie-card__button_save'}`}
          onClick={handleLikeMovie}
        >
          {isSaved ? '' : 'Сохранить'}
        </button>
      )}
      <a
        href={movie.trailerLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={location.pathname === "/movies" ? "https://api.nomoreparties.co/" + movie.image.url : movie.image}
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