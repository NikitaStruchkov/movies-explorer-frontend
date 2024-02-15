import './app.css';
import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
// import ProtectedRouteElement from '../ProtectedRoute'
import Register from '../Register/Register';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import ErrorPage from '../ErrorPage/ErrorPage';
import Burger from '../Navigation/Burger/Burger';
import * as auth from '../../utils/auth.js'
import { apiMain } from '../../utils/MainApi.js';

function App() {

  const navigate = useNavigate()
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('userId') !== null ? true : false)// вошёл пользователь в систему или нет
  const [currentUser, setCurrentUser] = useState({}) // пользователь
  const [errorMessage, setErrorMessage] = useState(''); // сообщение с ошибкой
  // ЛОГИН
  const handleLogin = formValue => {
    if (!formValue.email || !formValue.password) {
      return
    }
    auth
      .authorize(formValue.email, formValue.password)
      .then(() => {
          setLoggedIn(true)
          navigate('/')
      })
      .catch(err => console.log(err))
  }

  /**
 * если у пользователя есть токен в localStorage,
    эта функция проверит валидность токена
 * 
 */    

  const handleToken = () => {
    const jwt = localStorage.getItem('userId')
    if (!jwt) {
      setLoggedIn(false)
      return
    }
    // проверим токен
    auth
      .checkToken(jwt)
      .then(res => {
        if (res) {
          // Сохраняем токен в локальном хранилище
          localStorage.setItem('userId', res.token);

          // авторизуем пользователя
          setLoggedIn(true)
          navigate('/', { replace: true })
        } else {
          setLoggedIn(false)
        }
      })
      .catch(err => console.log(err))
  }

// РЕГИСТРАЦИЯ
  const handleRegister = formValue => {
    auth
      .register(formValue.name, formValue.email, formValue.password)
      .then(res => {
        console.log('DONE!')
        navigate('/signin', { replace: true })
      })
      .catch(err => {
        console.log(err)
        setErrorMessage('Произошла ошибка при регистрации. Пожалуйста, попробуйте снова.');
      })
  }
// ВЫХОД
  const handleExit = () => {
    setLoggedIn(false)
    localStorage.removeItem('userId')
    localStorage.removeItem('movieState');
    localStorage.removeItem('likedMovies');
    navigate('/signin')
  }


  const handleUpdateUser = data => {
    apiMain
      .sendUserInfo(data)
      .then(newUser => {
        setCurrentUser(newUser)
      })
      .catch(err => console.log(err))
  }


    // «Реакт» вызовет этот колбэк после того, как компонент будет смонтирован или обновлён.
    React.useEffect(() => {
      if (loggedIn) {
        apiMain.getUserInfo()
          .then((res) => {
            setCurrentUser({
              name: res.name,
              email: res.email
            });
            console.log(res)
          })
          .catch(err => console.log(err));
      }
    }, [loggedIn])

    useEffect(() => {
      handleToken()
    }, [])
  






////////////////////
const [likedMovies, setLikedMovies] = useState(JSON.parse(localStorage.getItem('likedMovies')) ||  []); 
const [isChanged, setChange] = useState(false); // изменение в сохраненных фильмах - для своевременного ререндера 

function handleLike(movie) {
  const isAdded = likedMovies.some(i => i.movieId === movie.id);
  if (!isAdded) {
    apiMain.createMovie(movie)
      .then((movie) => {
        setLikedMovies([...likedMovies, movie]);
      })
      .catch((err) => console.log(err));
  } else {
    const deleteMovie = likedMovies.filter((likesMovie) => likesMovie.movieId === movie.id);
    apiMain.deleteMovie(deleteMovie[0]._id)
      .then(() => {
        setLikedMovies((prevMovies) =>
          prevMovies.filter((movie) => deleteMovie[0].movieId !== movie.movieId)
        );
      })
      .catch((err) => console.log(err));
  }
}


   useEffect(() => { 
    localStorage.setItem('likedMovies', JSON.stringify(likedMovies));
  }, [likedMovies])



  function handleDelete(movieId) { //  удаление фильма из списка понравившихся фильмов
    apiMain.deleteMovie(movieId)
      .then(() => {
        setLikedMovies((prevMovies) => prevMovies.filter(movie => movie._id !== movieId)); 
        setChange(!isChanged);
        // фильтрует список фильмов и исключает удаленный фильм
      })
      .catch((err) => console.log(err));
  }




  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className='app'>
      <Burger />
      {/* Подготовьте необходимые маршруты:
по роуту / отображается страница «О проекте»;
по роуту /movies отображается страница «Фильмы»;
по роуту /saved-movies отображается страница «Сохранённые фильмы»;
по роуту /profile отображается страница с профилем пользователя;
по роутам /signin и /signup отображаются страницы авторизации и регистрации.
Защищать маршруты авторизацией пока не требуется. Достаточно наладить работу всех ссылок:
нажатие на логотип ведёт на страницу «О проекте»;
нажатие на «Фильмы» — на роут /movies;
нажатие на «Сохранённые фильмы» — на роут /saved-movies;
нажатие на «Регистрация», «Авторизация», «Аккаунт» — на соответствующие роуты /signup, /signin и /profile.
Если роут не совпадает ни с одним из вышеперечисленных, то должна отображаться 404 страница согласно макету. */}


      <Routes>
        <Route path='/signup' element={<Register errorMessage={errorMessage} onRegister={handleRegister} />} />
        <Route path='/signin' element={<Login onLogin={handleLogin} />} />
        <Route path='/' element={<Main loggedIn={loggedIn} />} />
        <Route path='/movies' element={<Movies likedMovies={likedMovies} handleLike={handleLike} loggedIn={loggedIn} />} />

        <Route path='/saved-movies' element={<SavedMovies isChanged={isChanged} handleDelete={handleDelete} loggedIn={loggedIn} />} />

        <Route path='/profile' element={<Profile onClick={handleExit} onUpdateUser={handleUpdateUser}/>} />

        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
