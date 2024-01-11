import './preloader.css';
import React from 'react';

export default function Preloader({ isVisible }) {
  const visibilityStyle = isVisible ? {} : { visibility: 'hidden' };

  return (
    <div className="preloader" style={visibilityStyle}>
      <button className="preloader__button">Ещё</button>
    </div>
  );
}