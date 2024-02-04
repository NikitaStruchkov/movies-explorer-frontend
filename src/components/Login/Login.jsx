import '../Register/register.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg'

function Login({ onLogin }) {

  const [formValue, setFormValue] = useState({
    email: '',
    password: ''
  })

  const handleChange = e => {
    const { name, value } = e.target

    setFormValue({
      ...formValue,
      [name]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    onLogin(formValue)
  }

  return (
    <section className='register'>
      <Link to='/'> <img src={logo} alt="Логотип" className='register__logo' /></Link>
      <h1 className='register__welcome'>Рады видеть!</h1>
      <form className='register__form' onSubmit={handleSubmit}>
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
        <label
          for='name'
          className='register__label'
          style={{ visibility: 'hidden' }}
        >
          Имя
        </label>
        <input
          id='username'
          name='name'
          type='text'
          // required
          style={{ visibility: 'hidden' }}
            placeholder='Имя'
        />
        <div className='register__button-container'>
          <button
            type='submit'
            className='register__button'
          >
            Войти
          </button>
        </div>
      </form>
      <div className='register__signin'>
        <p>Ещё не зарегистрированы?</p>
        <Link to='/signup' className='register__login-link'>
          Регистрация
        </Link>
      </div>
    </section>
  );
}

export default Login;
