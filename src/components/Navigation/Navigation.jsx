import './navigation.css';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import iconpink from '../../images/acc-icon.svg'
import iconblack from '../../images/acc-icon-black.svg'

export default function Navigation({loggedIn}) {

    const location = useLocation();
    const [isPink, setIsPink] = useState(false);
    const [navDisplayStyle, setNavDisplayStyle] = useState('none');
  
    useEffect(() => {
      setIsPink(location.pathname === '/' ? true : false);
    }, [location]);
    
    useEffect(() => {
      if(location.pathname === '/profile') {
        setNavDisplayStyle('flex')
      } else {
        setNavDisplayStyle(loggedIn ? 'flex' : 'none');
      }
      
    }, [loggedIn]);
  


  return (
    <section className='navigation' style={{ display: navDisplayStyle }}>
      <div className='navigation__links'>
        <Link className='navigation__link' to='/movies'>
          Фильмы
        </Link>
        <Link className='navigation__link' to='/saved-movies'>
          Сохранённые фильмы
        </Link>
      </div>
      <div className='navigation__account'>
        <Link className='navigation__link' to='/profile'>
          Аккаунт
        </Link>
        <img src={isPink ? iconpink : iconblack } alt='Аккаунт' className='navigation__account-img' style={{ backgroundColor: isPink ? '#000' : '#f9f9f9' }} />
      </div>
    </section>
  );
}
