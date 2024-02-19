// api.diplom.nomoredomainsmonster.ru

class MainApi {
    constructor (config) {
      this._url = config.url
      this._headers = config.headers
      this._authorization = config.headers.authorization // token
    }
  
    _getResponseData (res) {
      if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`)
      }
      return res.json()
    }
    getUserInfo () {
      // 1. Загрузка информации о пользователе с сервера
      return fetch(`${this._url}/users/me`, {
        credentials: 'include',
        headers: {
      'Content-Type': 'application/json'
    }
      }).then(res => this._getResponseData(res))
    }



sendUserInfo (profileData){
  //  Редактирование профиля
  return fetch(`${this._url}/users/me`, {
    method: 'PATCH',
    credentials: 'include',
    headers: {
      authorization: this._authorization,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(profileData)
  }).then(res => this._getResponseData(res))
}

 getMovies() {
  return fetch(`${this._url}/movies`, {
    credentials: 'include',
    headers: {
  'Content-Type': 'application/json'
}
  }).then(res => this._getResponseData(res))
}


 createMovie (movie) {
  return fetch(`${this._url}/movies`, {
    method: 'POST',
    headers: {

      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({
      "country": movie.country,
      "director": movie.director,
      "duration": movie.duration,
      "year": movie.year,
      "description": movie.description,
      "image": "https://api.nomoreparties.co/" + movie.image.url,
      "trailerLink": movie.trailerLink,
      "thumbnail": "https://api.nomoreparties.co/" + movie.image.formats.thumbnail.url,
      "movieId": movie.id,
      "nameRU": movie.nameRU,
      "nameEN": movie.nameEN,
      // "isLked": movie.isLked,
    })
  })
  .then(res => this._getResponseData(res))
}

deleteMovie(movieId) {
  return fetch(`${this._url}/movies/${movieId}`, {
    method: 'DELETE',
    headers: {
      authorization: this._authorization,
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })
  .then(res => this._getResponseData(res))
}
}

export const apiMain = new MainApi({
    // url: 'https://api.diplom.nomoredomainsmonster.ru',
    url: 'http://localhost:3001',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  