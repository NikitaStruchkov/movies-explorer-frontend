import React, {useState} from "react";
import './popup.css';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { validateName, validateEmail } from '../../utils/utils.js'

function Popup({ isOpen, onClick, onUpdateUser }) {

    // Подписка на контекст
    const currentUser = React.useContext(CurrentUserContext)
    const { name, email } = currentUser
    const [isFormEdited, setIsFormEdited] = React.useState(false); // изменение полей ввода
    const [profileName, setProfileName] = React.useState('')
    const [profileEmail, setProfileEmail] = React.useState('')

    const [isFormValid, setIsFormValid] = useState(false);

    const [errors, setErrors] = useState({
      email: "",
      password: "",
    });

    const formValidation = (name, email) => {
        const isNameValid = validateName(name);
        const isEmailValid = validateEmail(email);

        setErrors({
            name: isNameValid ? '' : 'Некорректное имя',
            email: isEmailValid ? '' : 'Некорректный email'
        });

        return (isNameValid && isEmailValid);
    }

    function handleNameChange(e) {
        const newName = e.target.value;
        setProfileName(newName);
        const isValid = formValidation(newName, profileEmail);
        setIsFormValid(isValid);
        setIsFormEdited(true);
    }

    function handleEmailChange(e) {
        const newEmail = e.target.value;
        setProfileEmail(newEmail);
        const isValid = formValidation(profileName, newEmail);
        setIsFormValid(isValid);
        setIsFormEdited(true);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (profileName !== name || profileEmail !== email) { // Проверяем, были ли внесены изменения
          onUpdateUser({
              name: profileName,
              email: profileEmail
          });
          onClick();
        }
      }

   
    React.useEffect(() => {
        if (isOpen) {
            setProfileName(currentUser.name);
            setProfileEmail(currentUser.email);
            const isValid = formValidation(currentUser.name, currentUser.email);
            setIsFormValid(isValid);
        }
    }, [isOpen, currentUser]);

    React.useEffect(() => {
        if (profileName === name && profileEmail === email) {
          // Если profileName или profileEmail соответствуют текущим значениям
          setIsFormEdited(false); // Устанавливаем, что форма не была изменена
        } else {
          // Если profileName или profileEmail не соответствуют текущим значениям
          setIsFormEdited(true); // Устанавливаем, что форма была изменена
        }
      }, [profileName, profileEmail, name, email]);


    return (
        <div className="popup">
            <form className="popup__form" noValidate onSubmit={handleSubmit}>
                <input
                    type="text"
                    required
                    className="popup__input"
                    onChange={handleNameChange}
                    value={profileName}
                />
                {errors.name && <span className='register__error'>{errors.name}</span>}
                <input
                    type="email"
                    required
                    className="popup__input"
                    onChange={handleEmailChange}
                    value={profileEmail}
                />
                {errors.email && <span className='register__error'>{errors.email}</span>}
                <button className="popup__submit" type="submit" disabled={!isFormValid || !isFormEdited}>
                    Сохранить
                </button>
            </form>
            <button className="popup__close" type="button" onClick={onClick} />
        </div>
    );
}


export default Popup;
