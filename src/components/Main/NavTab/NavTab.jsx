import './navtab.css'
import React from 'react'

export default function NavTab () {
  return (
    <section className='navtab'>
    <ul className="navtab__list">
        <li className="navtab__list-point"><a href="#about" className="navtab__list-link">О проекте</a></li>
        <li className="navtab__list-point"><a href="#techs" className="navtab__list-link">Технологии</a></li>
        <li className="navtab__list-point"><a href="#student" className="navtab__list-link">Студент</a></li>
    </ul>
    </section>
  )
}
