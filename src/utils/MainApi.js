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
}

export const apiMain = new MainApi({
    // url: 'https://api.diplom.nomoredomainsmonster.ru',
    url: 'http://localhost:3001',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  