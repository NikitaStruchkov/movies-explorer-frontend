import "./movies.css";
import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm/SearchForm";
import Preloader from "./Preloader/Preloader";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoreButton from "./MoreButton/MoreButton";
import { apiMovies } from "../../utils/MoviesApi";
import { REQUEST_ERROR_MESSAGE, NOTHING_FOUND } from "../../utils/constants";

function Movies({  loggedIn  }) {
  // Хук useState принимает начальное значение состояния и возвращает массив, в котором первый элемент - текущее значение состояния, а второй элемент - функция для его обновления.
  // список всех фильмов
  const [movies, setMovies] = React.useState([]);
  // для хранения отфильтрованных фильмов
  const [filteredMovies, setFilteredMovies] = useState([]);
  // для значения ввода пользователя
  const [searchQuery, setSearchQuery] = useState("");
  // Состояние для отслеживания состояния загрузки
  const [isPreloader, setIsPreloader] = useState(false);
  // для хранения состояния ответа при вознкновении ошибки
  const [isRequest, setIsRequest] = useState(false);

  const [initialCards, setInitialCards] = useState(0); // максимальное количество карточек при загрузке
  const [additionalCards, setAdditionalCards] = useState(4); // количество карточек, загружаемых по кнопке "Ещё"
  const [isShortMoviesOnly, setIsShortMoviesOnly] = useState(false); // состояние чекбокса Короткометражки

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1280) {
        setInitialCards(12);
        setAdditionalCards(3);
      } else if (screenWidth >= 768) {
        setInitialCards(8);
        setAdditionalCards(2);
      } else if (screenWidth >= 480) {
        setInitialCards(5);
        setAdditionalCards(1);
      } else {
        setInitialCards(5);
        setAdditionalCards(1);
      }
    };

    handleResize(); // обрабатываем размер окна сразу при загрузке компонента
    window.addEventListener('resize', handleResize); // слушаем событие изменения размера окна

    return () => {
      window.removeEventListener('resize', handleResize); // чистим
    }
  }, []);

// обрабатываем изменение кол-ва добавленных фильмов при нажатии на Еще
  function handleLoadMoreClick() {
    setInitialCards(initialCards + additionalCards);
  }

//  обработчик нажатия кнопки Найти
const handleSearch = (event) => {
  event.preventDefault();
  const filteredMoviesList = movies.filter((movie) => {
    const isFilmShort = isShortMoviesOnly ? movie.duration <= 40 : true;
    const isMatch = movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase());
    
    return isFilmShort && isMatch;
  });
  setFilteredMovies(filteredMoviesList);

    // Имитируем задержку, чтобы показать прелоадер
    setTimeout(() => {
      // Закончили загрузку, скрываем прелоадер
      setIsPreloader(false); 
      // setFilteredMovies(filteredMoviesList);
  
    }, 1000); // Примерно 1 секунда задержки для прелоадера

  };
 
  // обработчик ввода в строку поиска
  const handleInput = (event) => {
    const value = event.target.value;
    setSearchQuery(value);
  };

  /// Добавьте обработчик изменения состояния чекбокса "Короткометражки"
  const handleShortMoviesToggle = () => {
    setIsShortMoviesOnly(!isShortMoviesOnly);
  };

  
  useEffect(() => {
    if (searchQuery) {
      const filteredMoviesList = movies.filter((movie) => {
        const isFilmShort = isShortMoviesOnly ? movie.duration <= 40 : true;
        const isMatch = movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase());
        return isFilmShort && isMatch;
      });
      setFilteredMovies(filteredMoviesList);
    } else {
      setFilteredMovies([]);
    }
  }, [movies, isShortMoviesOnly, searchQuery]);

  // «Реакт» вызовет этот колбэк после того, как компонент будет смонтирован или обновлён.
  useEffect(() => {
    if (loggedIn) {
    setIsPreloader(true); // показывем прелоадер
    Promise.all([apiMovies.getInitialMovies()])
      .then(([movies]) => {
        // setCurrentUser(user)
        setMovies(movies);
        setIsPreloader(false); // скрываем прелоадер после получения ответа от API
      })
      .catch((err) => 
      console.log(err));
      setIsRequest(true);
    }
  }, [loggedIn]);


  return (
    <div>
      <Header loggedIn={loggedIn} />
      <div className="movies__search-form">
        <SearchForm
          searchQuery={searchQuery}
          onChange={handleInput}
          onSubmit={handleSearch}
        />
        <FilterCheckbox isShortMoviesOnly={isShortMoviesOnly} onShortMoviesToggle={handleShortMoviesToggle} />
      </div>
      <Preloader  isPreloader={isPreloader} />
      {filteredMovies.length === 0 && <p className="movies__nothing-found">{isRequest ?   NOTHING_FOUND : REQUEST_ERROR_MESSAGE}</p>}
      <section className="movie-card-list">
        {filteredMovies.slice(0, initialCards).map((movie) => {
          return (
            <MoviesCardList
              movie={movie}
              key={movie.id}
              // onCardClick={onCardClick}
              // onCardLike={onCardLike}
              // onCardDelete={onCardDelete}
            />
      
          );
        })}
      </section>
      {filteredMovies.length > initialCards && (<MoreButton onClick={handleLoadMoreClick}  isVisible={true} />)}
      <Footer />
    </div>
  );
}

export default Movies;
