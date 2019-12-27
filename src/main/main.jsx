import React from 'react';
import style from './main.module.css';
import About from './mainComponets/mainAbout';
import Projects from './mainComponets/mainProjects';
import Contact from './mainComponets/mainContact';
import Resume from './mainComponets/mainResume';

const Main = (props) => {
  return (
    <div className={style.main}>
      <About />
      <Projects />
      <Contact />
      <Resume />
    </div>
  );
};

export default Main;