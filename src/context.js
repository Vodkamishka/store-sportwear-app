import React, { Component } from 'react';
import {storeProducts} from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: storeProducts
  }
  handleDetail = () => {
    console.log('hello from detail')
  }
  addToCart = () => {
    console.log("hello from add to cart")
  }
  tester = () => {
    console.log('State products:', this.state.products[0].inCart);
    console.log('Data products:', storeProducts[0].inCart);
  }
  render() {
    return (
      <ProductContext.Provider value = {{
        ...this.state
      }}>
      {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};