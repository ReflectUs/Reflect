import React, { useState, useEffect } from "react";
import styled from "styled-components"

import { db } from "../firebase";

import TextEntry from './TextEntry';

const Journal = () => {

  const Wrapper = styled.div`
    border-radius: 12px;
    background-color: #888;
    opacity: 0.8;
    width: 300px;
    height: 290px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    color: #fff;
    z-index: 1;
    position: absolute;
    bottom: 20px;
    left: 20px;
  `;

  return(
    <Wrapper>
      <h2>What's on Your Mind?</h2>
      <TextEntry/>
    </Wrapper>
  )

}

export default Journal;