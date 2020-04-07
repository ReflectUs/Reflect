import React, { useState, useEffect } from "react";
import styled, { withTheme } from "styled-components";

import TopSiteEntry from "./TopSiteEntry";
import { db } from "../firebase";

const TopSites = () => {
  const [topSites, setTopSites] = useState([]);
  const [recievedData, setRecievedData] = useState(false);

  function getMonday() {
    let d = new Date();
    var day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6 : 1);
    return new Date(d.setDate(diff));
  }

  useEffect(() => {
    if (!recievedData) {
      setTopSites(JSON.parse(localStorage.getItem('topSites')));
      setRecievedData(true);

      // let uid = localStorage.getItem("uid");
      // let date = getMonday()
      //   .toLocaleString()
      //   .split(",")[0]
      //   .replace(new RegExp("/", "gi"), "-");
      // console.log("topSites/" + uid + "/" + date);
      // db.ref("topSites/" + uid + "/" + date).once("value", function(snapshot) {
      //   setTopSites(Object.entries(snapshot.val()));
      //   setTopSites(topSites
      //   .sort(function(a, b) {
      //     return a[1].time - b[1].time;
      //   }));
      //   setRecievedData(true);
      // });
    }
  });

  const Wrapper = styled.div`
    width: 100vw;
    height: 15vh;
    background: rgba(204, 204, 204, 0.6);
    padding: 0;
    margin: 0;
    position: absolute;
    top: 0;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    /* border-radius: 12px;
    background-color: #888;
    opacity: 0.8;
    width: 200px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    color: #fff;
    z-index: 1;
    position: absolute;
    bottom: 20px;
    right: 20px; */
  `;

  return (
    <Wrapper>
      <h2
        style={{
          color: 'white',
          padding: '0 15px'
        }}
      >
        Top Sites{" "}
      </h2>
      {topSites.map((site, index) => {
          return <TopSiteEntry key={index} site={site[1].website} time={site[1].time} number={index}/>;
        })}
    </Wrapper>
  );
};

export default TopSites;
