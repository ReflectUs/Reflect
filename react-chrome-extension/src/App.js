import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import wall0 from './assets/wall0.png';
import wall1 from './assets/wall1.jpg';
import wall2 from './assets/wall2.jpg';
import wall3 from './assets/wall3.jpg';

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
`

class App extends Component {
  render() {
    return (
      <BackgroundDiv>
        <Header/>
        <Greeting/>
      </BackgroundDiv>
    );
  }
}

export default App;
