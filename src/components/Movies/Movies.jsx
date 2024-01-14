import './movies.css';
import React, { useState, useEffect} from 'react';
import SearchForm from './SearchForm/SearchForm';
import Preloader from './Preloader/Preloader'
import MoviesCardList from './MoviesCardList/MoviesCardList';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoreButton from './MoreButton/MoreButton';
import { apiMovies } from '../../utils/MoviesApi';

function Movies() {
  // список фильмов
  const [movies, setMovies] = React.useState([]);
  //  Хук useState принимает начальное значение состояния и возвращает массив, в котором первый элемент - текущее значение состояния, а второй элемент - функция для его обновления.
  const [filteredMovies, setFilteredMovies] = useState([]); // для хранения отфильтрованных фильмов

  const [searchQuery, setSearchQuery] = useState(''); // для значения ввода пользователя
 
  const handleSearch = (event) => {
    event.preventDefault();
    const value =  event.target.elements.searchInput.value;
    setSearchQuery(value);
    
  
    const filteredBYMovies = movies.filter((movie) => {
      console.log(value);
      return movie.nameRU.toLowerCase().includes(value.toLowerCase());
    });
    setFilteredMovies(filteredBYMovies);
  };

  const handleInput = (event) => {
    const value = event.target.value;
    setSearchQuery(value);
    console.log(value);
  };

  // «Реакт» вызовет этот колбэк после того, как компонент будет смонтирован или обновлён.
  useEffect(() => {
    Promise.all([apiMovies.getInitialMovies()])
      .then(([movies]) => {
        // setCurrentUser(user)
        setMovies(movies);
      })
      .catch((err) => console.log(err));
  }, []);


  return (
    <div>
       <Header />
      <div className='movies__search-form'>
        <SearchForm searchQuery={searchQuery} onChange={handleInput} onSubmit={handleSearch} />
        <FilterCheckbox />
      </div>
      <section className='movie-card-list'>
        
      {filteredMovies.map(movie => {
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
       
      </section>
      <MoreButton isVisible={true} />
      <Preloader />
      <Footer />
    </div>
  );
}

export default Movies;
