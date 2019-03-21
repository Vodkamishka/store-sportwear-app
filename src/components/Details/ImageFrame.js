import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export default class ImageFrame extends Component {
  render() {
    return (
      <ImageFrameWrapper>
      <div className = 'container p-5'>
      <div className = "row">
      <Link to = "/">
      <span><i className = "fas fa-home"></i></span>
      </Link>
      <h5 className  = "title">
      /  {this.props.title}
      </h5>
      </div>
      </div>
      
      <div className = "frame">
        
      </div>
      </ImageFrameWrapper>
     
    )
  }
}

const ImageFrameWrapper = styled.div`
.frame {
    width: 95%;
    height: 600px;
    margin: 0 auto;
}
.frame:hover {
    border: 0.02px solid grey;
}
.title {
    font-family: "Lato", sans-serif;
}
.container {
    width: 40%;
    margin: 0 auto;
}
i {
    color: var(--MainBlack);
}
i:hover {
    color: var(--MainAqua);
}
.title:hover {
    color: var(--MainAqua);
}
`;