import "../Register/register.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import {
  validateEmail,
  validatePassword,
} from "../../utils/utils.js";

function Login({ onLogin, isError, setIsError }) {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
     // Проводим валидацию и устанавливаем ошибки в процессе ввода
     setErrors({
      ...errors,
      email: name === "email" ? (validateEmail(value) ? "" : "Некорректный email") : errors.email,
      password: name === "password" ? (validatePassword(value) ? "" : "Некорректный пароль") : errors.password
    }, () => {
      // После обновления ошибок вызываем функцию для проверки валидности формы
      const validValue = validateEmail(formValue.email) && validatePassword(formValue.password);
      setIsFormValid(validValue);
    });
  };
  const validValue = validateEmail(formValue.email) && validatePassword(formValue.password);

  useEffect(() => { // для синронизации отображения ошибок и состояния кнопки
    if (validValue === true) {
      // Активируем кнопку
      setIsFormValid(true)
    } else {
      // Деактивируем кнопку
      setIsFormValid(false)
    }
  }, [validValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      onLogin(formValue);
    }
  };

  useEffect(() => {
    setIsError(false); // обновляем значение isError
  }, []);


  return (
    <section className="register">
      <Link to="/">
        {" "}
        <img src={logo} alt="Логотип" className="register__logo" />
      </Link>
      <h1 className="register__welcome">Рады видеть!</h1>
      <form className="register__form" onSubmit={handleSubmit} noValidate>
        <label for="email" className="register__label">
          Email
        </label>
        <input
          id="usermail"
          name="email"
          type="email"
          required
          placeholder="Email"
          value={formValue.email}
          onChange={handleChange}
        />
        {errors.email && (
          <span className="register__error">{errors.email}</span>
        )}
        <label for="password" className="register__label">
          Пароль
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          placeholder="Пароль"
          value={formValue.password}
          onChange={handleChange}
        />
        {errors.password && (
          <span className="register__error">{errors.password}</span>
        )}
        <label
          for="name"
          className="register__label"
          style={{ visibility: "hidden" }}
        >
          Имя
        </label>
        <input
          id="username"
          name="name"
          type="text"
          // required
          style={{ visibility: "hidden" }}
          placeholder="Имя"
        />
        <p className="register__error" style={{ visibility: isError ? "visible" : "hidden" }}>Ошибка авторизации. Попробуйте ещё раз</p>
        <div className="register__button-container">
        <button
            type='submit'
            disabled={!isFormValid}  // Делаем кнопку неактивной, если форма не валидна
            className='register__button'
          >
            Войти
          </button>
        </div>
      </form>
      <div className="register__signin">
        <p>Ещё не зарегистрированы?</p>
        <Link to="/signup" className="register__login-link">
          Регистрация
        </Link>
      </div>
    </section>
  );
}

export default Login;
