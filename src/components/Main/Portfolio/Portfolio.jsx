import './portfolio.css'
import  pointer from '../../../images/portfolio-pointer-img.png'
import React from 'react'

export default function Portfolio () {
  return (
    <section className='portfolio'>
      <p className="portfolio__title">Портфолио</p>
        <a href="https://github.com/NikitaStruchkov/how-to-learn" target="_blank" className="portfolio__url">Статичный сайт  <img src={pointer} alt="Статичный сайт" className="portfolio__pointer" /></a>
       
        <a href="https://nikitastruchkov.github.io/russian-travel/index.html" target="_blank" className="portfolio__url">Адаптивный сайт  <img src={pointer} alt="Адаптивный сайт" className="portfolio__pointer" /></a>
       
        <a href="https://me.students.nomoredomainsrocks.ru" target="_blank" className="portfolio__url">Одностраничное приложение  <img src={pointer} alt="Одностраничное приложение" className="portfolio__pointer" /></a>

    
    </section>


  )
}
