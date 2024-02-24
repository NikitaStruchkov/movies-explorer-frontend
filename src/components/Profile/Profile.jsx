import './profile.css';
import React, {useState} from 'react';
import Header from '../Header/Header';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Popup from '../Popup/Popup';


function Profile({ loggedIn, onClick, onUpdateUser, successMessage }) {

  const [isOpen, setIsOpen] = React.useState(false) // состояние попапа
  const currentUser = React.useContext(CurrentUserContext) // контекст
  

  function hanlePopupOpen() {
    const popupElement = document.querySelector('.popup');
      popupElement.classList.add('popup__opened');
      setIsOpen(true)
  }

 function hanlePopupClose() {
  const popupElement = document.querySelector('.popup');
      popupElement.classList.remove('popup__opened');
      setIsOpen(false)

  }

  return (
    <>
    <Header loggedIn={loggedIn} />
    <section className='profile'>
    {successMessage && <div className="profile__message">Успешно!</div>}
      <h1 className='profile__welcome'>Привет, {currentUser.name}!</h1>
      <div className='profile__user-data'>
        <div className='profile__user-key-value'>
          <p className='profile__user-key'>Имя</p>
          <p className='profile__user-value'>{currentUser.name}</p>
        </div>
        <div className='profile__user-key-value'>
          <p className='profile__user-key'>E-mail</p>
          <p className='profile__user-value'>{currentUser.email}</p>
        </div>
      </div>
      <div className="profile__button-box">
        <button className='profile__button profile__button_edit' onClick={hanlePopupOpen}>Редактировать</button>
        <button className='profile__button profile__button_logout' onClick={onClick}>Выйти из аккаунта</button>
      </div>
      
    </section>
    <Popup isOpen={isOpen} onClick={hanlePopupClose} onUpdateUser={onUpdateUser}/>

    </>
  );
}

export default Profile;
