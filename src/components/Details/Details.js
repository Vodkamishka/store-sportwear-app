import React, { Component } from 'react';
import {ProductConsumer} from '../../context';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import ImageFrame from './ImageFrame';



export default class Details extends Component {
  render() {
    return (
      <WrapperDetails>
      <ProductConsumer>
        {value => {
          const {id, company, img, info, price, title, inCart} = value.detailProduct;
          return (
            <div className = "container-fluid">
            <div className = "row">
            <div className = "col-10 col-md-6  side">
            <ImageFrame title = {title} />
            </div>
            <div className = "col-10 col-md-6 bg-success">2</div>
            </div>
            </div>
          )
        }}
       
      </ProductConsumer>
      </WrapperDetails>
    )
  }
}

const WrapperDetails = styled.div`
.container-fluid .side  {
  height: 100vh;
}

`;