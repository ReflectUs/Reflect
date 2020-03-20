import React, { Component } from 'react'
import styled from 'styled-components'

export default class WidgetEntry extends Component {


  constructor(props) {
    super(props);
    
  }

  render() {
    const Wrapper = styled.div`
      width: 10vw;
      height: 10vh;
      background: rgba(204, 204, 204, 0.6);
      top: 0;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      border-radius: 10px;
      color: white;
      margin: 10px 0;
      padding-right: 10px;
      padding-left: 10px;
    `;

    const { title, label1, num1, label2, num2 } = this.props;
    
    return (
      <Wrapper>
        <b>{title}</b>
        {label1}: {num1} \\ {label2}: {num2}
      </Wrapper>
    )
  }
}



