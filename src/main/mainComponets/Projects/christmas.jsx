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
            <p style={{marginTop:1+'em'}} className={style.face2_text}>And this is an animation christmas postcard with countdown to the Happy New Year</p>
            <a target="_blank" href="https://codepen.io/vannish/pen/XWJjyNV">See the Pen</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChristmasPostcard;