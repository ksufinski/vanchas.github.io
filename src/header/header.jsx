import React from 'react';
import style from './header.module.css';
import { NavLink } from 'react-router-dom';
import Nav from './nav';
import logo from '../MyEmoji.jpg';
import Icon from '@material-ui/core/Icon';

const Header = (props) => {
  return (
    <div className={style.header}>
      <Nav />
      <div className={style.header_background}></div>
      <img className={style.user_photo} src={logo} alt={"logo"}/> 
      <div className={style.user_description}>

        <div className={style.links_box}>
          <a title="GitHub" className={style.link} target="_blank" 
              href="https://github.com/vanchas"></a>
          <a title="CodePen" className={style.link} target="_blank" 
              href="https://codepen.io/vannish"></a>
          <a title="GeekBrains" className={style.link} target="_blank" 
              href="https://geekbrains.ru/users/3967296"></a>
        </div>

        <h3>Khoroshevskyi Ivan</h3>
        <p>IT student</p>
        <p><address><Icon>place</Icon> Dnipro, Ukraine</address></p>
        
      </div>
    </div>
  );
};

export default Header;