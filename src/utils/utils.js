  // Функция проверки имени пользователя
  export const validateName = (name) => {
    return /^[a-zA-Zа-яА-Я\s-]+$/.test(name);
  }

  // Функция проверки email
  export const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  }

  // Функция проверки пароля
  export const validatePassword = (password) => {
    return password.length >= 8;
  }