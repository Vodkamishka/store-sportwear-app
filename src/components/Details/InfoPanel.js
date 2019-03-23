import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default class InfoPanel extends Component {
  render() {
    const inCart = this.props.inCart;
    const id = this.props.id;
    const addToCart = this.props.addToCart;
    console.log(addToCart)
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

          <div className="info font-weight-bold">INFO</div>

          <div className="info-block">
            <p>- Brand: {this.props.company}</p>
            <p>- Weight: 165 g</p>
            <p>- Material: Spandex, Poliester</p>
            <p>- Availability: In Stock</p>

            <div className="price font-weight-bold ">
              ${this.props.price}
            </div>

          </div>

          <div className="buttons">
            <Link to="/">
              <button className="back"><span><i class="fas fa-store"></i></span>Back to Products</button>
            </Link>
            <button disabled={inCart ? true : false}
              onClick={() => addToCart(id)}
              className="add"><span><i className="fas fa-shopping-cart"></i></span>
              {inCart ? "Rushguard in Cart" : "Add To Cart"} </button>
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
.add:hover {
  background: var(--MainAqua);
  color: var(--MainBlack);
  border-radius: 5px;
}
.back:hover {
  background: darkorange;
  color: var(--MainBlack);
  border-radius: 5px;
}
`;