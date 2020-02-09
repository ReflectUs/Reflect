import React, { Component } from "react";
import styled from "styled-components";
import { Row, Col } from "react-grid-system";

export default class TopSiteEntry extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { site, time } = this.props;

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
      width: 80%;
      display: inline;
      color: #fff;
      padding: 10px;
      background-color: #666;
      opacity: 0.9;
      margin: 5px;
      z-index: 2;
      span {
        float: right;
      }
    `;

    return (
        <Block>
          {siteslice}
          <span>{secondsToHms(time)}</span>
        </Block>
    );
  }
}
