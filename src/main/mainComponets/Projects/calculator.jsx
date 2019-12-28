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
          <p style={{paddingTop:3+'em'}} className={style.face2_text}>This is a simple javascript calculator with modern design</p>
            <a target="_blank" href="https://codepen.io/vannish/pen/NWWJZKX">See the Pen</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;