import React, { Component } from 'react';
import {Pictures} from '../../data';

 const Slider = () => {
   const img = Pictures.swimming;
   console.log(img)
    return (
      <div>
        <img src={img} />
      </div>
    )
  }


export default Slider;