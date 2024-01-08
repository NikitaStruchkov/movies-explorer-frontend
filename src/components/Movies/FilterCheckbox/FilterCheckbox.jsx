import './filter-checkbox.css'
import React from 'react'

export default function FilterCheckbox () {
  return (
    <div className="filter-checkbox">
      <label class="switch">
        <input type="checkbox"></input>
        <span class="slider round"></span>
    </label>
    <span class="filter-checkbox__discription">Короткометражки</span>

    </div>
    

  )
}
