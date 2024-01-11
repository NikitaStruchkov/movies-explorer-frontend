import './footer.css';
import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
        <h3 className="footer__discription">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
        <div className="footer__basement">
            <p className="footer__copyright">&copy; 2023</p>
            <ul className="footer__url-list">
                <li className="footer__url"><a href="https://practicum.yandex.ru/"  target='_blank' className="footer__link">Яндекс.Практикум</a></li>
                <li className="footer__url"><a href="https://github.com/" target='_blank' className="footer__link">Github</a></li>
            </ul>
        </div>
    </footer>
    
  );
}
