import React from "react";
import './popup.css';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Popup( {isOpen, onClick, onUpdateUser} ) {

    // Подписка на контекст
 const currentUser = React.useContext(CurrentUserContext)
 const { name, email } = currentUser


 const [profileName, setProfileName] = React.useState('')
 const [profileEmail, setProfileEmail] = React.useState('')

 function handleNameChange (e) {
   setProfileName(e.target.value)
 }

 function handleEmailChange (e) {
   setProfileEmail(e.target.value)
 }
  // Сохраняйте данные в API
  function handleSubmit (e) {
    e.preventDefault(); // Запрещаем браузеру переходить по адресу формы
    onUpdateUser({
      name: profileName,
      email: profileEmail
    });
    onClick(); // Закрываем попап после сохранения изменений
  }

 // После загрузки текущего пользователя из API
 // его данные будут использованы в управляемых компонентах.
 React.useEffect(() => {
   if (isOpen) {
     setProfileName(name)
     setProfileEmail(email)
   }
 }, [isOpen, currentUser])

 return (
    <div className="popup">
      <form className="popup__form" noValidate="" onSubmit={handleSubmit}>
        <input
          type="text"
          required=''
          className="popup__input"
          onChange={handleNameChange}
          value={profileName}/>
        <input 
          type="email" 
          required=''
          className="popup__input" 
          onChange={handleEmailChange}
          value={profileEmail}/>
        <button className="popup__submit" type="submit">Редактировать</button>{/* Используйте type="submit" для формы */}
      </form>
      <button className="popup__close" type="button" onClick={onClick}/>
    </div>
  );
}

export default Popup;
