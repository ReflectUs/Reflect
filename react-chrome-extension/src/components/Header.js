import React, { Component } from 'react'
import styled from 'styled-components'

// components
import DataBlock from "./DataBlock"


const HeaderDiv = styled.div`
  width: 100vw;
  height: 15vh;
  background: rgba(204, 204, 204, 0.6);
  padding: 0;
  margin: 0;
  position: absolute;
  top: 0;

`
export default class Header extends Component {
  render() {
    return (
      <HeaderDiv>
        <DataBlock></DataBlock>
      </HeaderDiv>
    )
  }
}
