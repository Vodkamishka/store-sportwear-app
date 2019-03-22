import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export default class InfoPanel extends Component {
  render() {
    return (
      <InfoPanelWrapper>
        <div className="container">


          <div className="title text-uppercase">
            {this.props.title}
          </div>


          <div className="stars">
            <span> <i className="fas fa-star "></i></span>
            <span> <i className="fas fa-star "></i></span>
            <span> <i className="fas fa-star "></i></span>
            <span> <i className="far fa-star "></i></span>
            <span> <i className="far fa-star "></i></span>
          </div>

          <div className = "info font-weight-bold">INFO</div>

          <div className = "info-block">
          <p>- Brand: {this.props.company}</p>
          <p>- Product Code: {this.props.productCode}</p>
          <p>- Reward Points: 700</p>
          <p>- Availability: {this.props.availabality}</p>
          
          <div className = "price font-weight-bold ">
          ${this.props.price}
          </div>

          </div>
          
          <div className = "buttons">
          <Link to = "/">
          <button className = "return"><span><i class="fas fa-tshirt"></i></span>Return to Products</button>
          </Link>
          <button className = "addToCart"><span><i className="fas fa-shopping-cart"></i></span>Add to cart</button>
          </div>

        </div>
      </InfoPanelWrapper>
    )
  }
}
const InfoPanelWrapper = styled.div`
.title {
    font-family: "Lato", sans-serif;
    margin-top: 10%;
    font-size: 25px;  
}
.fa-star {
    color: gold; 
}
.stars {
   margin-top: 3%;
}
.info {
  font-size: 18px;
  font-family: "Lato", sans-serif;
  margin-top: 10%;
}
.info-block {
  font-family: "Lato", sans-serif;
  margin-top: 3%;
}
.price {
  font-size: 30px;
  margin-top: 3%;
  border-top: solid 1px black;
  border-bottom: solid 1px black;
  padding: 10% 0 10% 0;
}
.buttons {
  margin-top: 9%;
}
button {
  width: 100%;
  text-transform: capitalize;
  font-family: 'Indie Flower', sans-serif;;
  margin: 2% 0;
  padding: 2%;
  font-weight: bold;
  transition: all 1s ease;
  letter-spacing: 0.55rem;
  background: var(--MainBlack);
  color: var(--MainWhite);
}
.addToCart {
  
}
.addToCart:hover {
  background: var(--MainAqua);
  color: var(--MainBlack);
  border-radius: 5px;
}
.return:hover {
  background: darkorange;
  color: var(--MainBlack);
  border-radius: 5px;
}
`;