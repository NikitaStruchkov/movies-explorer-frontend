import './techs.css';
import React from 'react';

export default function Techs() {
  return (
    <section className='techs'>
      <h2 className='about-project__title' id='techs'>
        Технологии
      </h2>
      <div className='techs__container'>
        <h1 className='techs__title'>7 технологий</h1>
        <p className='techs__discription'>
          На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые
          применили в&nbsp;дипломном проекте.
        </p>
        <div className='techs__boxes'>
          <div className='techs__box'>HTML</div>
          <div className='techs__box'>CSS</div>
          <div className='techs__box'>JS</div>
          <div className='techs__box'>React</div>
          <div className='techs__box'>Git</div>
          <div className='techs__box'>Express.js</div>
          <div className='techs__box'>mongoDB</div>
        </div>
      </div>
    </section>
  );
}
