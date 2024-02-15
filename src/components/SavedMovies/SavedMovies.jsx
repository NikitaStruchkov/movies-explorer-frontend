import '../Movies/movies.css';
import React, { useState, useEffect } from 'react';
import SearchForm from '../Movies/SearchForm/SearchForm';
import FilterCheckbox from '../Movies/FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Movies/Preloader/Preloader';
import Header from '../Header/Header';
import { apiMain } from '../../utils/MainApi';

function SavedMovies({loggedIn , handleDelete, isChanged }) {
  const [likedMovies, setLikedMovies] = useState([]);

   useEffect(() => { // загрузка списка фильмов при монтировании компонента
    apiMain.getMovies()
      .then((movies) => {
        setLikedMovies(movies);
      })
      .catch((err) => console.log(err));
  }, [isChanged]);


  return (
    <div>
      <Header />
      <div className='movies__search-form'>
        <SearchForm />
        <FilterCheckbox />
      </div>
      <section className='movie-card-list'>
        {likedMovies.map((movie) => (
          <MoviesCardList
            movie={movie}
            key={movie._id}
            handleDelete={() => handleDelete(movie._id)}
            isLiked={true}
          />
        ))}
      </section>
      <Preloader isVisible={false} />
      <Footer />
    </div>
  );
}

export default SavedMovies;
