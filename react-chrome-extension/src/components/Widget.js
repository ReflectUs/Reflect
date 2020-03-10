import React from 'react'

export const Widget = () => {

  const Wrapper = styled.div`
    width: 10vw;
    height: 10vh;
    background: rgba(204, 204, 204, 0.6);
    top: 0;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  `;


  return (
    <Wrapper>
      <b>Spotify</b>
      Unique Artists: 10
    </Wrapper>
  )
}
