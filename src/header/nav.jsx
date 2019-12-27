import React from 'react';
import style from './header.module.css';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
  return (
      <nav className={style.nav}>
        <NavLink activeClassName={style.activeLink} 
            className={style.nav__item} 
            to="/about">About</NavLink>
        <NavLink activeClassName={style.activeLink} 
            className={style.nav__item} 
            to="/projects">Projects</NavLink>
        <NavLink activeClassName={style.activeLink} 
            className={style.nav__item} 
            to="/contact">Contact</NavLink>
        <NavLink activeClassName={style.activeLink} 
            className={style.nav__item} 
            to="/resume">Resume</NavLink>
      </nav>
  );
};

export default Nav;