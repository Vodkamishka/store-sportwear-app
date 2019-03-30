import React, { Component } from 'react';
import styled from 'styled-components';


export default class Default extends Component {
  render() {
    return (
      <DefaultWrapper>
        <h1>page not found</h1>
      </DefaultWrapper>
    )
  }
}

const DefaultWrapper = styled.div`
background: black;
color: white;
height: 100vh;
width: 1344px;
display: flex;
align-items: center;
text-transform: capitalize;
`;