import './search-form.css'
import loupe from '../../../../src/images/search-f-loupe.svg'
import React from 'react'

export default function SearchForm () {
  return (
    <form className='search-form'>
       <img src={loupe} alt="Поиск" className="search-form__loupe" />
       <input type="text" placeholder='Фильм' className="search-form__input" />
       <button className="search-form__button">Найти</button>
    </form>
  )
}
