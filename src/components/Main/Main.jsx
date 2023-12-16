import './main.css'
import React from 'react';
import Promo from './Promo/Promo';
import NavTab from './NavTab/NavTab';
// import AboutProject from './AboutProject';
// import Techs from './Techs';
// import AboutMe from './AboutMe';
// import Portfolio from './Portfolio';

function Main() {
  return (
    <main>
      <Promo />
       <NavTab />
       {/* <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio /> */}
    </main>
  );
}

export default Main;