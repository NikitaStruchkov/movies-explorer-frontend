import './movies.css';
import React from 'react';
import SearchForm from './SearchForm/SearchForm';
import Preloader from './Preloader/Preloader'
import MoviesCardList from './MoviesCardList/MoviesCardList';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function Movies({ movies }) {
  return (
    <div>
       <Header />
      <div className='movies__search-form'>
        <SearchForm />
        <FilterCheckbox />
      </div>
      <section className='movie-card-list'>
      {movies.map(movie => {
          return (
            <MoviesCardList
            movie={movie}
              key={movie.id}
              // onCardClick={onCardClick}
              // onCardLike={onCardLike}
              // onCardDelete={onCardDelete}
            />
          )
        })}
        {/* <MoviesCardList />
        <MoviesCardList />
        <MoviesCardList />
        <MoviesCardList />
        <MoviesCardList />
        <MoviesCardList />
        <MoviesCardList />
        <MoviesCardList />
        <MoviesCardList />
        <MoviesCardList />
        <MoviesCardList />
        <MoviesCardList /> */}
      </section>
      <Preloader  isVisible={true} />
      <Footer />
    </div>
  );
}

export default Movies;
