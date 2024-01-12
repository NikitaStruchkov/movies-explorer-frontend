import './app.css';
import React, { useEffect }  from 'react'
import { Route, Routes } from 'react-router-dom'
// import ProtectedRouteElement from '../ProtectedRoute'
import Register from '../Register/Register'
import Login from '../Login/Login'
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import ErrorPage from '../ErrorPage/ErrorPage'
import Burger from '../Navigation/Burger/Burger';
import { apiMovies } from '../../utils/MoviesApi'



function App() {

  // список фильмов
  const [movies, setMovies] = React.useState([])


   // «Реакт» вызовет этот колбэк после того, как компонент будет смонтирован или обновлён.
   useEffect(() => {
      Promise.all([apiMovies.getInitialMovies()])
        .then(([movies]) => {
          // setCurrentUser(user)
          setMovies(movies)
        })
        .catch(err => console.log(err))
  
  }, [])

  return (
    <div className="app">
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
            <Route
              path='/signup'
              element={<Register />}
            />
            <Route path='/signin' element={<Login />} />
            <Route
              path='/'
              element={<Main/>}
            />
            <Route
              path='/movies'
              element={<Movies
                movies={movies}
              />}
              

            />
            
             <Route
              path='/saved-movies'
              element={<SavedMovies/>}
  
            />
          
             <Route
              path='/profile'
              element={<Profile/>}
  
             />
    
            <Route
             path='*'
             element={<ErrorPage/>}
            /> 
          </Routes>

    </div>
  );
}

export default App;
