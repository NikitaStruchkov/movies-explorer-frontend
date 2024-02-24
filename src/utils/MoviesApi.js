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


}

export const apiMovies = new moviesApi({
  url: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json',
  },
});
