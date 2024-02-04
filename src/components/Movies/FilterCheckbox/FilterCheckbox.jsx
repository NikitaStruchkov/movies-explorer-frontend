import "./filter-checkbox.css";
import React from "react";

export default function FilterCheckbox({
  isShortMoviesOnly,
  onShortMoviesToggle,
}) {
  return (
    <div className="filter-checkbox">
      <label class="switch">
        <input type="checkbox"  onChange={onShortMoviesToggle}></input>
        <span class="slider round"></span>
      </label>
      <span class="filter-checkbox-discription">Короткометражки</span>
    </div>
  );
}
