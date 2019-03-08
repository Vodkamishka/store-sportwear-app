import React, { Component } from 'react';
import {Pictures} from '../../data';

 const Slider = () => {
   const img = Pictures.swimming;
    return (
      <div>
        <img src={img} />
      </div>
    )
  }


export default Slider;