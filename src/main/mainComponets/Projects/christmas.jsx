import React from 'react';
import style from './projects.module.css';
import logo from './ChristmasPostcard.png';

const ChristmasPostcard = (props) => {
  return (
    <section className={style.container}>
      <div className={style.card}>
        <div className={style.face1}>
          <div className={style.content}>
          <img style={{height:100 + '%'}} src={logo} alt="head image" className={style.img} />
          </div>
        </div>
        <div className={style.face2}>
          <div className={style.content}>
            <p className={style.face2_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
            <a target="_blank" href="https://codepen.io/vannish/pen/XWJjyNV">Read More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChristmasPostcard;