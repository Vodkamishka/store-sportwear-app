import React from 'react';
import style from './Navbar.module.css';
import { NavbarList, Fa, Logo } from '../../data';
import Text from './Text';
import Fab from './Fab';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


const Navbar = () => {
  const img = Logo.runner;
  return (
    <NavbarWrapper className={style.container}>
      <div className={style.image}>
      <Link to = "/">
        <img src={img} style={{ width: 250, height: 250 }} alt = "runner" />
      </Link>
      </div>
      <h2>Sportwear</h2>
      <div className={style.list}>
        <ul>
          {NavbarList.map((element) => <Text text={element.text} key={element.id} />)}
        </ul>
      </div>
      <div className={style.button}>
        <span><i className="fas fa-shopping-cart"></i></span>
        <div>Shopping Cart</div>
      </div>
      <div className={style.socialNetwork}>
        <ul>
          {Fa.map((element) => {
          return <a href = {element.path} key = {element.id + 1} rel="noopener noreferrer" target="_blank" >
          <Fab fab = {element.fab} key = {element.id} />
          </a>
          })
        }
        </ul>
      </div>
    </NavbarWrapper>
  )
}

export default Navbar;

const NavbarWrapper = styled.div`
.container {
  position: absolute;
  text-transform: uppercase;
  letter-spacing: 0.8rem;
  height: 100vh;
  width: 20%;
  left: 0;
  background: black;
  color: white;
  
}
`;
