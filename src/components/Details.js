import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';



export default class Details extends Component {
  render() {
    return (
      
      <ProductConsumer>
        {value => {
          console.log(value);
          const {id, company, img, info, price, title, inCart} = value.products[0];
        }}
      </ProductConsumer>
      
    )
  }
}
