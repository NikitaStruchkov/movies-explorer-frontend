import './about-project.css'
import React from 'react'

export default function AboutProject () {
  return (
    <section className='about-project'>
    <h2 className="about-project__title" id="about">О проекте</h2>
    <div className="about-project__steps">
        <div className="about-project__step">
            <h3 className="about-project__step-title">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__step-discription">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about-project__step">
            <h3 className="about-project__step-title">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__step-discription">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
       
    </div>
    <div className="about-project__timeline">
            <div className="about-project__backend">
                <p className="about-project__timeline-discription">1 неделя</p>
            </div>
            <div className="about-project__frontend">
                <p className="about-project__timeline-discription">4 недели</p>
            </div>
        </div>
        <div className="about-project__timeline">
            <div className="about-project__backend-basement">
                <p className="about-project__timeline-discription">Back-end</p>
            </div>
            <div className="about-project__frontend-basement">
                <p className="about-project__timeline-discription">Front-end</p>
            </div>
        </div>
    </section>
  )
}
