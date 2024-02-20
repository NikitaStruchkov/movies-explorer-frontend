import './register.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg'
import { validateName, validateEmail, validatePassword } from '../../utils/utils.js'

function Register({ errorMessage, onRegister }) {
  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    password: ''
  })

  const [isFormValid, setIsFormValid] = useState(false);

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    setFormValue({
      ...formValue,
      [name]: value,
    });
  
    setErrors({
      ...errors,
      [name]: 
        name === "name" ? (validateName(value) ? "" : "поле name содержит только латиницу, кириллицу, пробел или дефис") :
        name === "email" ? (validateEmail(value) ? "" : "поле email должно соответствовать шаблону электронной почты") :
        name === "password" ? (validatePassword(value) ? "" : "пароль должен состоять минимум из 8 символов") : ''
    })
      // После обновления ошибок вызываем функцию для проверки валидности формы
      const validValue = validateName(formValue.name) && validateEmail(formValue.email) && validatePassword(formValue.password);
      setIsFormValid(validValue);
  
  };
  const validValue = validateName(formValue.name) && validateEmail(formValue.email) && validatePassword(formValue.password);

  useEffect(() => { // для синронизации отображения ошибок и состояния кнопки
    if (validValue === true) {
      // Активируем кнопку
      setIsFormValid(true)
    } else {
      // Деактивируем кнопку
      setIsFormValid(false)
    }
  }, [validValue]);


  
  const handleSubmit = e => {
    e.preventDefault();
    if (isFormValid) {
      onRegister(formValue);
    }
  }
  return (
    <section className='register'>
      <Link to='/'> <img src={logo} alt="Логотип" className='register__logo' /></Link>

      <h1 className='register__welcome'>Добро пожаловать!</h1>
      <form onSubmit={handleSubmit} className='register__form' noValidate>
        <label htmlFor='name' className='register__label'>
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
        {errors.name && <span className='register__error'>{errors.name}</span>}
        <label htmlFor='email' className='register__label'>
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
        {errors.email && <span className='register__error'>{errors.email}</span>}
        <label htmlFor='password' className='register__label'>
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
        {errors.password && <span className='register__error'>{errors.password}</span>}

        <div className='register__button-container'>
          <button
            type='submit'
            disabled={!isFormValid}  // Делаем кнопку неактивной, если форма не валидна
            className='register__button'
          >
            Зарегистрироваться
          </button>
          {errorMessage && <span className='register__error'>{errorMessage}</span>}
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

