import React, { Component } from 'react';
import { SliderImages, Left } from '../../../data';
import style from './Slider.module.css';

export default class Slider extends Component {
  state = {
    left: 1344,
    sliderImages: SliderImages,
    timer: 0
  }
  componentDidMount = () => {
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
    });
    setTimeout(() => {
      let sliderImages = this.state.sliderImages;
      let moveElement = sliderImages.shift();
      moveElement.id = moveElement.id + 6;
      sliderImages.push(moveElement);
    }, 1000);
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
  render() {
    return (
      <div className={style.container}>
        {this.state.sliderImages.map(element => <img className={style.img} src={element.img} alt={element.alt} id={element.id} left={this.state.left} key={element.id} style={{ left: 1344 * element.id - this.state.left - 2688 }} />)}
        <button className={style.left} onClick={this.moveLeft}><i className="fas fa-angle-left"></i></button>
        <button className={style.right} onClick={this.moveRight}><i className="fas fa-angle-right"></i></button>
      </div>
    )
  }
}
