import React, { Component } from 'react';
import style from './Navbar.module.css';
import { NavbarList,Fa, Pictures } from '../../../data';

const Navbar = () => {
  const img = Pictures.runner;
  return (
    <div className={style.container}>
      <div className={style.image}>
      <img src={img} style = {{width:250, height:250}}></img>
      <h2>Sportwear</h2>
      </div>
      <div className={style.list}>
        <ul>
          {NavbarList.map((element) => {
            return <li>{element}</li>
          })}
        </ul>
      </div>
      <div className = {style.button}>
      <div><span><i className="fas fa-shopping-cart"></i></span>
      Shopping Cart</div>
      </div>
      <div className={style.socialNetwork}>
      <ul>
      {Fa.map((element) => {
            return <li><i className={element}></i></li>
          })}
      </ul>
      </div>
    </div>
  )
}

export default Navbar;

