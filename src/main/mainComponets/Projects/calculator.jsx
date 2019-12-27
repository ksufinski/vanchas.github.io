import React from 'react';
import style from './projects.module.css';
import logo from './Calculator.png';

const Calculator = (props) => {
  return (
    <section className={style.container}>
      <div className={style.card}>
        <div className={style.face1}>
          <div className={style.content}>
          <img src={logo} alt="calculator image" className={style.img} />
          </div>
        </div>
        <div className={style.face2}>
          <div className={style.content}>
          <p className={style.face2_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
            <a target="_blank" href="https://codepen.io/vannish/pen/NWWJZKX">Read More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;