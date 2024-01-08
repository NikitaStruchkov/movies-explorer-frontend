import '../Movies/movies.css';
import React from 'react';
import SearchForm from '../Movies/SearchForm/SearchForm';
import FilterCheckbox from '../Movies/FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Movies/Preloader/Preloader';
import Header from '../Header/Header';

function SavedMovies() {
  return (
    <div>
      <Header />
      <div className='movies__search-form'>
        <SearchForm />
        <FilterCheckbox />
      </div>
      <section className='movie-card-list'>
        <MoviesCardList />
        <MoviesCardList />
        <MoviesCardList />
      </section>
      <Preloader isVisible={false} />
      <Footer />
    </div>
  );
}

export default SavedMovies;
