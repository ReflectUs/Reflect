import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import background from './assets/backgroundMountains.png';

// components
import Header from './components/Header';

const BackgroundDiv = styled.div`
  background-image: url(${background});
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

class App extends Component {
  render() {
    return (
      <BackgroundDiv>
        <Header></Header>
      </BackgroundDiv>
    );
  }
}

export default App;
