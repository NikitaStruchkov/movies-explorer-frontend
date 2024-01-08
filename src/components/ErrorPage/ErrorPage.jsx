import './error-page.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function ErrorPage() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  
  return (
    <section className='error-page'>
      <h1 className="error-page__title">404</h1>
      <p className="error-page__discription">Страница не найдена</p>
      <button  onClick={handleGoBack} className="error-page__back-button">Назад</button>

      
    </section>
  );
}

export default ErrorPage;
