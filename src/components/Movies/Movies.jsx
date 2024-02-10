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
import { REQUEST_ERROR_MESSAGE, NOTHING_FOUND, KEYWORD__MESSAGE } from "../../utils/constants";

function Movies({  loggedIn  }) {
  const savedState = JSON.parse(localStorage.getItem('movieState'));

  // список всех фильмов
  const [movies, setMovies] = React.useState(savedState.filteredMovies || []);
  // для хранения отфильтрованных фильмов
  const [filteredMovies, setFilteredMovies] = useState([]);
  // для значения ввода пользователя
  const [searchQuery, setSearchQuery] = useState(savedState.searchQuery || "");
  // Состояние для отслеживания состояния загрузки
  const [isPreloader, setIsPreloader] = useState(false);

  const [initialCards, setInitialCards] = useState(0); // максимальное количество карточек при загрузке
  const [additionalCards, setAdditionalCards] = useState(4); // количество карточек, загружаемых по кнопке "Ещё"
  const [isShortMoviesOnly, setIsShortMoviesOnly] = useState(savedState.isShortMoviesOnly || false); // состояние чекбокса Короткометражки
  const [isMessage, setIsMessage] = useState('')



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

  // фильмы из хранилища
  // const storedFilteredMovies = JSON.parse(localStorage.getItem('filteredMovies'));
//  обработчик нажатия кнопки Найти
const handleSearch = (event) => {
  event.preventDefault();
  
  if (searchQuery === '') {
    setFilteredMovies([]);
    setIsMessage(KEYWORD__MESSAGE);
  } else {
    const filteredMoviesList = movies.filter((movie) => {
      const isFilmShort = isShortMoviesOnly ? movie.duration <= 40 : true;
      const isMatch = movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase());
      
      return isFilmShort && isMatch;
    });
    
    if (filteredMoviesList.length === 0) {
      setFilteredMovies([]);
      setIsMessage(NOTHING_FOUND);
    } else {
      setFilteredMovies(filteredMoviesList);
      setIsMessage(' ');
    }
  }
};
 
  // обработчик ввода в строку поиска
  const handleInput = (event) => {
    const value = event.target.value;
    setIsMessage(' ');
    setSearchQuery(value);
  };

  // обработчик изменения состояния чекбокса "Короткометражки"
  const handleShortMoviesToggle = () => {
    setIsShortMoviesOnly(!isShortMoviesOnly);
  };

 // Для сохранения в localStorage результатов поиска
 useEffect(() => {
  const stateToSave = { filteredMovies, searchQuery, isShortMoviesOnly };
  localStorage.setItem('movieState', JSON.stringify(stateToSave));
}, [filteredMovies, searchQuery, isShortMoviesOnly]);



  // «Реакт» вызовет этот колбэк после того, как компонент будет смонтирован или обновлён.
  useEffect(() => {
  if (loggedIn) {
    setIsPreloader(true); // показываем прелоадер
    Promise.all([apiMovies.getInitialMovies()])
      .then(([movies]) => {
        console.log('хуй')
        setMovies(movies);
        setIsPreloader(false); // скрываем прелоадер после получения ответа от API
      })
      .catch((err) => {
        console.log(err);
        setIsPreloader(false); // скрываем прелоадер в случае ошибки
      });
  }
}, [loggedIn]);


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
  }, [isShortMoviesOnly]);




  return (
    <div>
      <Header loggedIn={loggedIn} />
      <div className="movies__search-form">
        <SearchForm
          searchQuery={searchQuery}
          onChange={handleInput}
          onSubmit={handleSearch}
        />
        <FilterCheckbox isShortMoviesOnly={isShortMoviesOnly} onShortMoviesToggle={handleShortMoviesToggle} checked={savedState.isShortMoviesOnly} />
      </div>
      <Preloader  isPreloader={isPreloader} />
      <p className="movies__nothing-found">{isMessage}</p>
      <section className="movie-card-list">
        {filteredMovies.slice(0, initialCards).map((movie) => {
          return (
            <MoviesCardList
              movie={movie}
              key={movie.id}
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



