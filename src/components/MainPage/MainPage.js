import React, { Component } from 'react';
import ProductList from './ProductList/ProductList';
import Navbar from './Navbar/Navbar';
import Slider from './Slider/Slider';

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


