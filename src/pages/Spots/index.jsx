import styled from 'styled-components'
import SpotList from '../../components/SpotList'
import React from 'react'
import { useState } from 'react'
import surf1 from '../../assets/gian-luca-modified.jpg'

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

const Searchbar = styled.input`
  width: 419px;
  height: 57px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 1px solid #0f0e0e;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding-left: 20px;
  font-family: Amaranth;
  font-style: italic;
`
const Presentation = styled.div``
function Spots() {
  const [inputText, setInputText] = useState('')
  let inputHandler = (e) => {
    setInputText(e.target.value)
  }

  return (
    <Main>
      <Presentation>
        <SurfPic src={surf1} alt="surf-pic" />
        <Searchbar type="search" id="spot-search" onChange={inputHandler} />
        <SpotList input={inputText} />
      </Presentation>
    </Main>
  )
}

export default Spots
