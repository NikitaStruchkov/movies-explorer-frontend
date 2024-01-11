import '../Register/register.css';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg'

function Login() {
  return (
    <section className='register'>
      <Link to='/'> <img src={logo} alt="Логотип" className='register__logo' /></Link>
      <h1 className='register__welcome'>Рады видеть!</h1>
      <form className='register__form'>
        <label for='email' className='register__label'>
          Email
        </label>
        <input
          id='usermail'
          name='email'
          type='email'
          required
            placeholder='Email'
          //   value={}
          //   onChange={}
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
          //   value={}
          //   onChange={}
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
          required
          style={{ visibility: 'hidden' }}
            placeholder='Имя'
          //   value={}
          //   onChange={}
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
        <p>Ещё не зарегистрированы?</p>
        <Link to='/signup' className='register__login-link'>
          Регистрация
        </Link>
      </div>
    </section>
  );
}

export default Login;
