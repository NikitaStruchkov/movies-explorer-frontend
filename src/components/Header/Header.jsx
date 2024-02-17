import './header.css';
import logo from '../../images/logo.svg'
import burger from '../../images/burger.svg'
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header ({loggedIn}) {
  const location = useLocation();
  const [isPink, setIsPink] = useState(false);
  const [buttonDisplayStyle, setButtonDisplayStyle] = useState('flex');

  useEffect(() => {
    setIsPink(location.pathname === '/' ? true : false);
  }, [location]);

  useEffect(() => {
    if(location.pathname === '/profile') {
      setButtonDisplayStyle('none');
    } else if(location.pathname === '/saved-movies') {
      setButtonDisplayStyle('none');
    
    } else {
      setButtonDisplayStyle(loggedIn ? 'none' : 'flex');
    }
  }, [loggedIn, location]);


  function openPopup() {
    const burgerElement = document.querySelector('.burger');
    if (burgerElement) {
      burgerElement.style.display = 'flex';
    }
  }


  return (
    <header style={{ backgroundColor: isPink ? '#f3c1f8' : '#fff' }} className='header'>
      <Link to='/'> <img className='header__logo' src={logo} alt='Логотип' /></Link>
      <Navigation loggedIn={loggedIn} />
      <div className="header__button-box" style={{ display: buttonDisplayStyle }}>
        <Link className='header__buttons header__buttons_up' to='/signup'>
        Регистрация
        </Link>
        <Link className='header__buttons header__buttons_in' to='/signin'>
        Вход
        </Link>
      </div>
      <img className='header__burger' src={burger} alt='Меню'  onClick={openPopup}/>
    </header>
  )
}

export default Header
