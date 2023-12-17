import './about-me.css'
import  photo from '../../../images/about-me-photo.jpg'
import React from 'react'

export default function AboutMe () {
  return (
    <section className='about-me'>
    <h2 className="about-project__title">Студент</h2>
    <div className="about-me__container">
    <div className="about-me__info">
       <h1 className="about-me__title">Никита</h1> 
       <h3 className="about-me__subtitle">Фронтенд-разработчик, 27 лет</h3> 
       <p className="about-me__discription">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
       <a href="https://github.com/NikitaStruchkov?tab=repositories" target="_blank" className="about-me__git-url">Github</a>
    </div>
    <img src={photo} alt="Никита" className="about-me__student-photo" />
    </div>
    </section>
  )
}
