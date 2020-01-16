import React, { Component } from 'react'
import styled from 'styled-components'

const BlockDiv = styled.div`
  background-color: #DDD;
  border-radius: 15px;
  width: 200px;
  height: 10vh;
  opacity: 0.8;
`

const TitleDiv = styled.div`
  color: white;
  font-size: 20px;
  margin: 5px;
  font-weight: bold;
  opacity: 1;
`


export default class DataBlock extends Component {
  render() {
    return (
      <BlockDiv>
        <TitleDiv>
          Spotify
        </TitleDiv>
      </BlockDiv>
    )
  }
}
