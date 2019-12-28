import React from 'react';
import style from './projects.module.css';
import logo from './Mondriana.png';

const Mondriana = (props) => {
  return (
    <section className={style.container}>
      <div className={style.card}>
        <div className={style.face1}>
          <div className={style.content}>
            <img src={logo} alt="picture image" className={style.img}/>
          </div>
        </div>
        <div className={style.face2}>
          <div className={style.content}>
            <p className={style.face2_text}> The <b>Mondriana</b> gave birth to new trends in painting and graphics. A worthy candidate to learn workind with Grid layout</p>
            <a target="_blank" href="https://codepen.io/vannish/pen/YzzxoVg">See the Pen</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mondriana;