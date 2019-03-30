import React, { Component } from 'react';
import { SliderImages } from '../../data';
import styled from 'styled-components';

export default class Slider extends Component {
  state = {
    left: 1344,
    sliderImages: [],
    timer: 0,
    i: 2,
    blocks: ""
  }
  componentDidMount = () => {
    this.setSlider();
    const timer = setInterval(() => {
      this.moveRight();
    }, 4000);
    this.setState((state) => {
      return {
        timer: timer
      }
    });
  }
  moveLeft = () => {
    clearInterval(this.state.timer);
    this.setState((state) => {
      return {
        left: state.left + 1344
      }
    }, () => {
      let sliderImages = this.state.sliderImages;
      let moveElement = sliderImages.shift();
      moveElement.id = moveElement.id + 6;
      sliderImages.push(moveElement);
    }
    );
  }
  moveRight = () => {
    let sliderImages = this.state.sliderImages;
    let moveElement = sliderImages.pop();
    moveElement.id = moveElement.id - 6;
    sliderImages.unshift(moveElement);
    this.setState((state) => {
      return {
        left: state.left - 1344
      }
    });
    
  }
  setSlider = () => {
    let tempSlider = [];
    SliderImages.forEach((element) => {
      let tempElement = { ...element };
      tempSlider = [...tempSlider, tempElement];
    })
    this.setState(() => {
      return { sliderImages: tempSlider };
    })
  }
  /*setActiveBlockRight = () => {
    let i = this.state.i;
    let collection = document.querySelectorAll(".blocks");
    collection[i].classList = "blocks";
    i = i + 1;
    if (i > collection.length - 1) { i = 0 }
    collection[i].classList = "blocks active";
    this.setState(() => {
      return { i: i }
    })
  }
  setActiveBlockLeft = () => {
    let i = this.state.i;
    let collection = document.querySelectorAll(".blocks");
    collection[i].classList.remove('active');
    i = i - 1;
    if (i < 0) { i = collection.length - 1 }
    collection[i].classList.add('active');
    this.setState(() => {
      return { i: i }
    })
  }*/
  render() {
    return (
      <SliderWrapper>
        <div className="container-fluid">

          {this.state.sliderImages.map(element => <img className="img" src={element.img} alt={element.alt} key={element.id} style={{ left: 1344 * element.id - this.state.left - 2688 }} />)}
          <button className="left" onClick={this.moveLeft}><i className="fas fa-angle-left"></i></button>
          <button className="right" onClick={this.moveRight}><i className="fas fa-angle-right"></i></button>
          <div className="blockWrapper">
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks active"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
            <div className="blocks"></div>
          </div>
        </div>
      </SliderWrapper>
    )
  }
}

const SliderWrapper = styled.div`
background: var(--MainBlack);
.container-fluid {
    height: 80vh;  
    position: relative;
    width: 100%;  
}
.left, .right {
  position: absolute;
  background: rgba(0,0,0,0.3);
  width: 60px;
  height: 60px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--MainWhite); 
  border: none;
  font-size: 30px;
}
.left:hover, .right:hover  {
  background: var(--MainAqua);
  font-size: 30px;
}
.right {
  right: 0;
}
.left {
  left: 0;
}
.img {
  position: absolute;
  transition: all 1s linear; 
  
}
.blockWrapper {
  position: absolute;
  left: 50%;
  bottom: 0.5%;
  transform: translate(-50%);
}
.blocks {
  width: 10px;
  height: 10px;
  background: rgba(0,0,0,0.8);
  display: inline-block;
  margin: 10px;
  transition: all 1s linear;
  border-radius: 50%;  
}
.active {
  background: var(--MainAqua);
}
`;