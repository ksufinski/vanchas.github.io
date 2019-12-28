import React from 'react';
import style from './projects.module.css';
import logo from './ArchetypeTest.png';

const Archetypes = (props) => {
  return (
    <section className={style.container}>
      <div className={style.card}>
        <div className={style.face1}>
          <div className={style.content}>
          <img src={logo} alt="head image" className={style.img}/>
          </div>
        </div>
        <div className={style.face2}>
          <div className={style.content}>
          <p className={style.face2_text}>Find out what Archetype you are, using my test. Actualy, i made a constructor for any questioners in native javascript</p>
            <a target="_blank" href="https://codepen.io/vannish/pen/NWPKQVY">See the Pen</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Archetypes;