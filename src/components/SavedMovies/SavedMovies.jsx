import "../Movies/movies.css";
import React, { useState, useEffect } from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import FilterCheckbox from "../Movies/FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Preloader from "../Movies/Preloader/Preloader";
import Header from "../Header/Header";
import { apiMain } from "../../utils/MainApi";
import { NOTHING_FOUND } from "../../utils/constants";

function SavedMovies({ loggedIn, handleDelete, isChanged }) {
  const [likedMovies, setLikedMovies] = useState([]);
   // для хранения отфильтрованных фильмов
   const [filteredMovies, setFilteredMovies] = useState(likedMovies);
  // для значения ввода пользователя
  const [searchQuery, setSearchQuery] = useState("");
  const [isShortMoviesOnly, setIsShortMoviesOnly] = useState(false); // состояние чекбокса Короткометражки
  const [isMessage, setIsMessage] = useState("");

  useEffect(() => {
    apiMain
      .getMovies()
      .then((movies) => {
        setLikedMovies(movies);
        setFilteredMovies(movies); // Устанавливаем отфильтрованные фильмы при первичной загрузке
      })
      .catch((err) => console.log(err));
  }, [loggedIn, isChanged]);

 
  

  //  обработчик нажатия кнопки Найти
  const handleSearch = (event) => {
    event.preventDefault();
    let fullMoviesList = likedMovies; // все фильмы
    if (searchQuery === "") {
      setFilteredMovies(likedMovies);
    } else {
      const filteredMoviesList = fullMoviesList.filter((movie) => {
        const isFilmShort = isShortMoviesOnly ? movie.duration <= 40 : true;
        const isMatch = movie.nameRU
          .toLowerCase()
          .includes(searchQuery.toLowerCase());

        return isFilmShort && isMatch;
      });

      if (filteredMoviesList.length === 0) {
        setFilteredMovies([]);
        setIsMessage(NOTHING_FOUND);
      } else {
        setFilteredMovies(filteredMoviesList);
        setIsMessage(" ");
      }
    }
  };

  // обработчик ввода в строку поиска
  const handleInput = (event) => {
    const value = event.target.value;
    setIsMessage(" ");
    setSearchQuery(value);
  };

  // обработчик изменения состояния чекбокса "Короткометражки"
  const handleShortMoviesToggle = () => {
    setIsShortMoviesOnly((prevState) => !prevState);
  };

  useEffect(() => {
    if (searchQuery) {
      const filteredMoviesList = likedMovies.filter((movie) => {
        const isFilmShort = isShortMoviesOnly ? movie.duration <= 40 : true;
        const isMatch = movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase());
        return isFilmShort && isMatch;
      });
      setFilteredMovies(filteredMoviesList);
    } else {
      setFilteredMovies(likedMovies);
    }
  }, [isShortMoviesOnly, searchQuery]);


  return (
    <div>
      <Header />
      <div className="movies__search-form">
        <SearchForm
          searchQuery={searchQuery}
          onSubmit={handleSearch}
          onChange={handleInput}
        />
        <FilterCheckbox
          isShortMoviesOnly={isShortMoviesOnly}
          onShortMoviesToggle={handleShortMoviesToggle}
          checked={isShortMoviesOnly}
        />
      </div>
      <p className="movies__nothing-found">{isMessage}</p>
      <section className="movie-card-list">
        {filteredMovies.map((movie) => (
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
