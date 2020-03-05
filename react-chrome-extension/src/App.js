import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'

// components
import Header from './components/Header';
import Greeting from './components/Greeting';
import TopSites from './components/TopSites';
import Journal from './components/Journal';

// can you animate this (fade-in) + cache the image for the day? 
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

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #000000;
    opacity: 0.3;
    z-index: 0;
  }

`

class App extends Component {
  render() {
    return (
      <BackgroundDiv>
        {/* <Header/> */}
        <TopSites/>
        <Greeting/>
        <Journal/>
      </BackgroundDiv>
    );
  }
}

export default App;
