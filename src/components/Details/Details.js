import React, { Component } from 'react';
import {ProductConsumer} from '../../context';
import styled from 'styled-components';
import ImageFrame from './ImageFrame';
import InfoPanel from './InfoPanel';



export default class Details extends Component {
  render() {
    return (
      <WrapperDetails>
      <ProductConsumer>
        {value => {
          const {id, company, img, img1, img2, img3, info, price, title, inCart} = value.detailProduct;
          const {addToCart,  openModal} = value;
          return (
            <div className = "container-fluid">
            <div className = "row">
            <div className = "col-10 col-md-6  side">
            <ImageFrame title = {title} img = {img} img1 = {img1} img2 = {img2} img3 = {img3} />
            </div>
            <div className = "col-10 col-md-6 ">
            <InfoPanel id = {id} title = {title} company = {company}  price = {price} inCart = {inCart} addToCart = {addToCart} openModal = {openModal}/>
            </div>
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