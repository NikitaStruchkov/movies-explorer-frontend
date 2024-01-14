import './movie-card.css';
// import simple from './../../../images/about-me-photo.jpg';
import React from 'react';

export default function MoviesCardList({ movie }) {
  return (
    <div className='movie-card'>
    <button className="movie-card__button movie-card__button_save">Сохранить</button>
    <button className="movie-card__button movie-card__button_saved"></button>
    <button className="movie-card__button movie-card__button_delete"></button>
    <img src={`https://api.nomoreparties.co/${movie.image.url}`} alt='Фильм' className='movie-card__img' />
    <div className="movie-card__information">
        <p className="movie-card__description">{movie.nameRU}</p>
        <p className="movie-card__duration">{movie.duration}</p>

    </div>
    </div>
  );
}
