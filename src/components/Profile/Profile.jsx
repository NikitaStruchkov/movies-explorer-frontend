import './profile.css';
import React from 'react';
import Header from '../Header/Header';

function Profile() {
  return (
    <>
    <Header />
    <section className='profile'>
      <h1 className='profile__welcome'>Привет, Пользователь!</h1>
      <div className='profile__user-data'>
        <div className='profile__user-key-value'>
          <p className='profile__user-key'>Имя</p>
          <p className='profile__user-value'>Значение</p>
        </div>
        <div className='profile__user-key-value'>
          <p className='profile__user-key'>E-mail</p>
          <p className='profile__user-value'>Значение</p>
        </div>
      </div>
      <div className="profile__button-box">
        <button className='profile__button profile__button_edit'>Редактировать</button>
        <button className='profile__button profile__button_logout'>Выйти из аккаунта</button>
      </div>
      
    </section>
    </>
  );
}

export default Profile;
