import './header.css';
import logo from '../../images/logo.svg'
import burger from '../../images/burger.svg'
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header () {
  const location = useLocation();
  const [isPink, setIsPink] = useState(false);

  useEffect(() => {
    setIsPink(location.pathname === '/' ? true : false);
  }, [location]);

  return (
    <header style={{ backgroundColor: isPink ? '#f3c1f8' : '#fff' }} className='header'>
      <img className='header__logo' src={logo} alt='Логотип' />
      <Navigation />
      <div className="header__button-box">
        <Link className='header__buttons header__buttons_up' to='/signup'>
        Регистрация
        </Link>
        <Link className='header__buttons header__buttons_in' to='/signin'>
        Вход
        </Link>
      </div>
      <img className='header__burger' src={burger} alt='Меню' />
    </header>
  )
}

export default Header


{/* <div className='header__box'>
        {location.pathname === '/signin' && (
          <Link className='header__link' to='/signup'>
            Регистрация
          </Link>
        )}
        {location.pathname === '/signup' && (
          <Link className='header__link' to='/signin'>
            Войти
          </Link>
        )}

        {location.pathname === '/' && (
          <>
            <p className='header__email'>{email}</p>
            <Link
              className='header__link'
              to='/sign-in'
            //   onClick={() => onSignOut()}
            >
              Выйти
            </Link>
          </>
        )}
      </div> */}