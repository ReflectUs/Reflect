import React from 'react'
import styled from 'styled-components'

import TopSiteEntry from './TopSiteEntry';



const TopSites = () => {

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

  var topSiteData = [
    ["Amazon.com", "42"],
    ["Test.org", "12044"]
  ]
  return (
    <Wrapper>
      <h2 style={{
        opacity: "1"
      }}>Top Sites</h2>
      <TopSiteEntry site={topSiteData[0][0]} time={topSiteData[0][1]} />
      <TopSiteEntry site={topSiteData[1][0]} time={topSiteData[1][1]} />
    </Wrapper>
  )
}

export default TopSites;