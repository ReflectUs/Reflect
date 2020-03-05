import React, { Component } from "react";
import styled from "styled-components";

const Hello = styled.h1`
  font-size: 64px;
  position: absolute;
  top: 30%;
  margin: 0;
  padding: 0;
  left: 20px;
  /* transform: translateX(-50%) translateY(-50%); */
  color: #fff;
`;
export default class Header extends Component {
  render() {
    let name = localStorage.getItem("name")

    return <Hello>Good Morning{name ? ', ' + name.split(" ")[0] + '!' : ""}</Hello>;
  }
}
