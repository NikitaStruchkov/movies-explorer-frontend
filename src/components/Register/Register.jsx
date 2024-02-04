import './register.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg'

function Register({ onRegister }) {
  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = e => {
    // отслеживание ввода данных в импуты
    const { name, value } = e.target

    setFormValue({
      ...formValue,
      [name]: value
    })
  }

  const handleSubmit = e => {
    // сабмит формы
    e.preventDefault() // отмена перезагрузки страницы при сабмите формы
    onRegister(formValue)
  }

  return (
    <section className='register'>
      <Link to='/'> <img src={logo} alt="Логотип" className='register__logo' /></Link>
      
      <h1 className='register__welcome'>Добро пожаловать!</h1>
      <form onSubmit={handleSubmit} className='register__form'>
        <label for='name' className='register__label'>
          Имя
        </label>
        <input
          id='username'
          name='name'
          type='text'
          required
          placeholder='Имя'
          value={formValue.name}
          onChange={handleChange}
        />
        <label for='email' className='register__label'>
          Email
        </label>
        <input
          id='usermail'
          name='email'
          type='email'
          required
          placeholder='Email'
          value={formValue.email}
          onChange={handleChange}
        />
        <label for='password' className='register__label'>
          Пароль
        </label>
        <input
          id='password'
          name='password'
          type='password'
          required
          placeholder='Пароль'
          value={formValue.password}
          onChange={handleChange}
        />

        <div className='register__button-container'>
          <button
            type='submit'
            // onSubmit={}
            className='register__button'
          >
            Зарегистрироваться
          </button>
        </div>
      </form>
      <div className='register__signin'>
        <p>Уже зарегистрированы?</p>
        <Link to='/signin' className='register__login-link'>
          Войти
        </Link>
      </div>
    </section>
  );
}

export default Register;

// при вводе данных отправить их в стейт
// при сабмите формы отправить данные на бэк
// если все хорошо, то отправить на логин
// если нет - показать ошибку