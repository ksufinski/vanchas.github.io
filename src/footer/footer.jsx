import React from 'react';
import style from './footer.module.css';

const Footer = (props) => {
  return (
    <div className={style.footer}>
      <span className={style.footer_text}>
        <i>&#169;</i><time>2020</time>Khoroshevskyi Ivan 
      </span>
      <span className={style.substring}><i>Sponsored by </i> Myself</span>
    </div>
  );
};

export default Footer;