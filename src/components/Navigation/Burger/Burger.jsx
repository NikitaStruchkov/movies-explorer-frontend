import './burger.css';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import iconblack from '../../../images/acc-icon-black.svg';

export default function Burger({closePopup}) {
  return (
    <section className='burger'>
      <button className='burger__close' type='button' onClick={closePopup}></button>
      <div className='burger__container'>
        <div className='burger__links'>
          <Link className='burger__link' to='/'>
            Главная
          </Link>
          <Link className='burger__link' to='/movies'>
            Фильмы
          </Link>
          <Link className='burger__link' to='/saved-movies'>
            Сохранённые фильмы
          </Link>
        </div>

        <div className='burger__account'>
          <Link className='burger__link' to='/profile'>
            Аккаунт
          </Link>
          <img
            src={iconblack}
            alt='Аккаунт'
            className='burger__account-img'
          />
        </div>
      </div>
    </section>
  );
}
