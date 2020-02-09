import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'

// components
import Header from './components/Header';
import Greeting from './components/Greeting';

const BackgroundDiv = styled.div`
  background-image: url("https://source.unsplash.com/1600x900/?nature");
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  -webkit-transition: background 1.5s linear;
  -moz-transition: background 1.5s linear;
  -o-transition: background 1.5s linear;
  -ms-transition: background 1.5s linear;
  transition: background 1.5s linear;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #000000;
    opacity: 0.3;
  }

`

class App extends Component {
  render() {
    return (
      <BackgroundDiv>
        {/* <Header/> */}
        <Greeting/>
      </BackgroundDiv>
    );
  }
}

export default App;
