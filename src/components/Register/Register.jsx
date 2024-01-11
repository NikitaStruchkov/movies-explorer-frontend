import './register.css';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg'

function Register() {
  return (
    <section className='register'>
      <Link to='/'> <img src={logo} alt="Логотип" className='register__logo' /></Link>
      
      <h1 className='register__welcome'>Добро пожаловать!</h1>
      <form className='register__form'>
        <label for='name' className='register__label'>
          Имя
        </label>
        <input
          id='username'
          name='name'
          type='text'
          required
          placeholder='Имя'
          //   value={}
          //   onChange={}
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
