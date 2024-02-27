import styled from 'styled-components'
import React from 'react'
// import { useState } from 'react'
import DetailedSpotlist from '../../components/DetailedSpotList'
import surf1 from '../../assets/gian-luca-modified.jpg'

function Spots() {
  return (
    <Main>
      <Presentation>
        <SurfPic src={surf1} alt="surf-pic" />
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
`

const SurfPic = styled.img`
  display: flex;
  position: absolute;
  width: 100%;
  opacity: 0.5;

  z-index: 2;
`

const Presentation = styled.div``

export default Spots
