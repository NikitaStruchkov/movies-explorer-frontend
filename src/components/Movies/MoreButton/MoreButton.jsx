import './more-button.css';
import React from 'react';

export default function MoreButton({ isVisible }) {
  const visibilityStyle = isVisible ? {} : { visibility: 'hidden' };

  return (
    <div className="more-button" style={visibilityStyle}>
      <button className="more-button__button">Ещё</button>
    </div>
  );
}