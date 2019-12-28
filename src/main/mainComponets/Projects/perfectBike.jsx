import React from 'react';
import style from './projects.module.css';
import logo from './PerfectBike.png';

const PerpectBike = (props) => {
  return (
    <section className={style.container}>
      <div className={style.card}>
        <div className={style.face1}>
          <div className={style.content}>
          <img src={logo} alt="bicycle image" className={style.img} />
          </div>
        </div>
        <div className={style.face2}>
          <div className={style.content}>
          <p className={style.face2_text}>This is a questionare, which can help you to find out your perfect bicycle. I've made it after tho weeks learning javascript</p>
            <a target="_blank" href="https://codepen.io/vannish/pen/rNNvLZB">See the Pen</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerpectBike;