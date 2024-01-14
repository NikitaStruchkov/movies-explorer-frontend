// https://api.nomoreparties.co/beatfilm-movies

class moviesApi {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
    this._authorization = config.headers.authorization; // token
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  getInitialMovies() {
    //
    return fetch(`${this._url}/`, {
      //   credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => this._getResponseData(res));
  }

//   getSearchMovies() {
//     return fetch(`${this._url}/`, {
//       //   credentials: 'include',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         const filteredMovies = data.filter((movie) => movie.nameRU);
//         console.log(filteredMovies);
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   }
}

export const apiMovies = new moviesApi({
  url: 'https://api.nomoreparties.co/beatfilm-movies',
  // url: 'http://localhost:3001',
  headers: {
    // authorization: '44f88861-7aa4-4c69-b219-337a1c6a7261',
    'Content-Type': 'application/json',
  },
});
