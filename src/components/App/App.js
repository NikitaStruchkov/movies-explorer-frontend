import './app.css';
import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import ProtectedRouteElement from '../ProtectedRoute'
// import Register from '../Register'
// import Login from '../Login'
import Main from '../Main/Main'
// import Movies from '../Movies'
// import SavedMovies from '../SavedMovies'
// import Profile from '../Profile'



function App() {
  return (
    <div className="app">
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
            {/* <Route
              path='/signup'
              element={<Register />}
            />
            <Route path='/signin' element={<Login />} /> */}
            <Route
              path='/'
              element={<Main/>}
            />
            {/* <Route
              path='/movies'
              element={
                <ProtectedRouteElement
                  element={<Movies/>}
                />
              }
            />
             <Route
              path='/saved-movies'
              element={
                <ProtectedRouteElement
                  element={<SavedMovies/>}
                />
              }
            />
             <Route
              path='/profile'
              element={
                <ProtectedRouteElement
                  element={<Profile/>}
                />
              }
            />
            <Route path='*' element={<Navigate to='/' replace />} /> */}
          </Routes>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      
    </div>
  );
}

export default App;
