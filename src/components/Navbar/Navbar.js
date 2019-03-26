import React, { Component } from 'react';
import Text from './Text';
import Fab from './Fab';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ProductConsumer } from '../../context';

export default class Navbar extends Component {
  render() {
    return (
      <NavbarWrapper >
        <ProductConsumer>
          {value => {
             const { cart, Logo, NavbarList, Fa} = value;
            return (<div className="container">
              <div className="image">
                <Link to="/">
                  <img src={Logo.runner} style={{ width: 250, height: 250 }} alt="runner" />
                </Link>
              </div>
              <h2>Sportwear</h2>
              <div className="list">
                <ul>
                  {NavbarList.map((element) =>
                    <Link to={element.path} key = {element.id +23}>
                      <Text text={element.text} key={element.id} />
                    </Link>
                  )}
                </ul>
              </div>
              <Link to="/cart">
                <div className="button">
                <div>Shopping Cart  <span><i className="fas fa-shopping-cart"></i>{ cart.length === 0 ? (null) : (cart.length) }</span></div>
                  </div>
              </Link>
              <div className="socialNetwork">
                <ul>
                  {Fa.map((element) => {
                    return <a href={element.path} key={element.id + 1} rel="noopener noreferrer" target="_blank" >
                      <Fab fab={element.fab} key={element.id} />
                    </a>
                  })
                  }
                </ul>
              </div>
            </div>
            )
          }}
        </ProductConsumer>
      </NavbarWrapper>
    )
  }
}
const NavbarWrapper = styled.div`
.container, .list, .image, h2, .button, .socialNetwork {
  position: absolute;
}
.container {
  text-transform: uppercase;
  letter-spacing: 0.8rem;
  height: 100vh;
  width: 20%;
  left: 0;
  background: black;
  color: white;
}
.list {
  font-size: 1rem;
  letter-spacing: 0.8rem;
  font-family: "Lato", sans-serif;
  text-align: left;  
  bottom: 25%;
  left: 7%;  
}
ul {
  padding: 0;
}
.list li{
  list-style-type: none;
  padding: 0.6rem;
  border-top: 0.02px solid gray;
  border-bottom: 0.02px solid gray;
  color: var(--MainAqua);
  letter-spacing: 0.8rem;
}
li:hover {
  color: var(--MainWhite);
  transform: scale(1.02); 
}
.image {
  top: 2%;
  left: 12%;
}
.image:hover {
  mix-blend-mode: luminosity;
}
h2 {
  letter-spacing: 0.8rem; 
  top: 34%; 
  left: 10%;   
}
h2:hover {
  color: var(--MainRed);
  transition: all 0.5s linear;
}
.button {
  bottom: 14%;
  right: 6%;
  border: 1px solid var(--MainWhite);
  text-transform: capitalize;
  letter-spacing: 0.55rem;
  padding: 1.1rem;
  transition: all 0.5s linear; 
  width: 93%;
  display: flex;
  font-family: 'Indie Flower', sans-serif;
  color: var(--MainWhite);
}
span {
  padding-right: 15px;   
}
.button:hover{
  background: var(--MainAqua);
  color: var(--MainBlack);
  font-weight: 600;
  border-radius: 5px;
}
.socialNetwork{
  bottom: 4%;
  left: 4%;
}
.socialNetwork li {
  display: inline;
  letter-spacing: 1.3rem; 
  font-size: 1.2rem; 
  color: var(--MainAqua);
  position: relative;
}
.socialNetwork li:hover {
  color: var(--MainRed);
}
a {
  text-decoration: none;
}
`;
