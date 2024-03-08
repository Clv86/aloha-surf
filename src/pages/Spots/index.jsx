import styled from 'styled-components'
import React from 'react'
// import { useState } from 'react'
import DetailedSpotlist from '../../components/DetailedSpotList'
// import surf1 from '../../assets/gian-luca-modified.jpg'

function Spots() {
  return (
    <Main>
      <Presentation>
        <DetailedSpotlist input="" />
      </Presentation>
    </Main>
  )
}

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 17%;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0;
  margin: 0;
  @media (max-width: 554px) {
    top: 7%;
  }
  @media (max-height: 490px) {
    top: 20%;
    overflow: scroll;
    height: auto;
    bottom: -8%;
  }
`

const Presentation = styled.div``

export default Spots
