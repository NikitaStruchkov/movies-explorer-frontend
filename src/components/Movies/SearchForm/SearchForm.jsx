import './search-form.css';
import loupe from '../../../../src/images/search-f-loupe.svg';
import React, { useState } from 'react';

export default function SearchForm({ searchQuery, onSubmit, onChange }) {

  return (
      <form className='search-form' onSubmit={onSubmit}>
      <img src={loupe} alt="Поиск" className="search-form__loupe" />
        <input
          type='text'
          placeholder='Фильм'
          className='search-form__input'
          name="searchInput"
          value={searchQuery}
          onChange={onChange}
        />
        <button className='search-form__button' type='submit'>
          Найти
        </button>
        {/* {props.filteredMovies.length > 0 ? (
        <ul>
          {props.filteredMovies.map((movie) => (
            <li key={movie.id}>{movie.nameRU}</li>
          ))}
        </ul>
      ) : (
        <p>Фильмы не найдены</p>
      )} */}
     </form>
  );
}