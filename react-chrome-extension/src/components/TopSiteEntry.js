import React, { Component } from 'react'
import styled from 'styled-components'


export default class TopSiteEntry extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { site, time } = this.props

    const Block = styled.div`
      border-radius: 10px;
      width: 80%;
      display: flex;
      flex-flow: column nowrap;
      /* align-items: center;  */
      justify-content: center;
      color: #fff;
      padding: 10px;
      background-color: #666;
      opacity: 0.9;
      margin: 5px;
      z-index: 2;
    `;

    return (
      <Block>
        {site}: {time}
      </Block>
    )
  }
}
