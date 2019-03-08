import React, { Component } from 'react';
import Slider from './Slider';
import ProductList from './ProductList';
import styled from 'styled-components';
import Navbar from './Navbar/Navbar';

export default class MainPage extends Component {
  render() {
    return (
    <React.Fragment>
     <div className = "mainPage">
     <div className = "navbar"><Navbar /></div>
     <div className = "slider"><Slider /></div>
     <div className = "productList"><ProductList /></div>
     </div>
    </React.Fragment>
    )
  }
}


