import React, { Component } from "react";
import styled from "styled-components";
import { Row, Col } from "react-grid-system";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default class TopSiteEntry extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { site, time, number } = this.props;

    let siteslice;
    if (site.length > 20) {
      siteslice = site.slice(0, 20) + "...";
    } else {
      siteslice = site;
    }

    function secondsToHms(d) {
      d = Number(d);
      var h = Math.floor(d / 3600);
      var m = Math.floor((d % 3600) / 60);
      var s = Math.floor((d % 3600) % 60);

      var hDisplay = h > 0 ? h + (h == 1 ? "h " : "h ") : "";
      var mDisplay = m > 0 ? m + (m == 1 ? "m " : "m ") : "";
      var sDisplay = s > 0 ? s + (s == 1 ? "s" : "s") : "";

      if (m > 0) {
        sDisplay = "";
      }

      return hDisplay + mDisplay + sDisplay;
    }

    const Block = styled.div`
      border-radius: 10px;
      /* display: flex;
      flex-flow: column wrap; */
      display: block;
      height: 45px;
      min-width: 120px;
      color: #fff;
      padding: 10px;
      background: rgba(120, 120, 120, 0.7);
      opacity: 0.9;
      margin: 5px;
      z-index: 2;
      div {
        margin: 2px 10px;
      }
    `;

    const ChevronDiv = styled.div`
      float: right;
    `;

    return (
        <Block>
          <div><b>{number + 1}. {siteslice}</b></div>
          <div>{secondsToHms(time)}</div>
          <ChevronDiv>
            <FontAwesomeIcon icon={faChevronDown} />
          </ChevronDiv>
        </Block>
    );
  }
}
