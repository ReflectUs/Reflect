import React, { Component } from 'react'
import styled from 'styled-components'


const Hello = styled.h1`
font-size: 96px;
position: absolute;
top: 50%;
margin: 0;
padding: 0;
left: 50%;
transform: translateX(-50%) translateY(-50%);
color: #fff;
`
export default class Header extends Component {
  render() {
    return (
     <Hello>
         Hello, Varun
     </Hello>
    )
  }
}
