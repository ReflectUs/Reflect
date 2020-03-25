import React, { Component } from 'react';
import '../App.css';
import styled from 'styled-components'


// components
// import Header from 'Header';
import Greeting from './Greeting';
import TopSites from './TopSites';
import Journal from './Journal';
import Widgets from './Widgets';
import SignInButton from './SignInButton';

const BackgroundDiv = styled.div`
  background-image: url("https://source.unsplash.com/random?nature");
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: -3;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #000000;
    opacity: 0.3;
    z-index: -2;
  }
`

export default class Top extends Component {

  
  render() {

    if (localStorage.getItem("newName") != "null" && localStorage.getItem("newName") != null) {
      return (
        <BackgroundDiv>
          {/* <Header/> */}
          <TopSites/>
          <Greeting/>
          <Journal/>
          <Widgets/>
        </BackgroundDiv>
      );
    } else {
      return (
        <BackgroundDiv>
          <SignInButton/>
        </BackgroundDiv>
      )
    }
  }
}
