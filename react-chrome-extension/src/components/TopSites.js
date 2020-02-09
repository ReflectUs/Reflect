import React, { useState, useEffect } from "react";
import styled from "styled-components";

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
      let uid = localStorage.getItem("uid");
      let date = getMonday()
        .toLocaleString()
        .split(",")[0]
        .replace(new RegExp("/", "gi"), "-");
      db.ref("topSites/" + uid + "/" + date).once("value", function(snapshot) {
        setTopSites(Object.entries(snapshot.val()));
        setRecievedData(true);
        console.log(topSites);
      });
    }
  });

  const Wrapper = styled.div`
    border-radius: 20px;
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
    right: 20px;
  `;

  return (
    <Wrapper>
      <h2
        style={{
          opacity: "1"
        }}
      >
        Top Sites
      </h2>
      {topSites.map((site) => {
        return <TopSiteEntry site={site[1].website} time={site[1].time} />
      }
      )}
    </Wrapper>
  );
};

export default TopSites;
