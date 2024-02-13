import styled from 'styled-components'
import SpotList from '../../components/SpotList'
import React from 'react'
import { useState } from 'react'

const Presentation = styled.div`
  display: inline;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 20px;
  padding-left: 122px;
  width: calc(100%-122px);
  height: auto;
  overflow-x: scroll;
  position: absolute;
  top: 17%;
  bottom: 8%;
  left: 0%;
  right: 122px;
  background-color: #54a8a3;
`

const Searchbar = styled.input`
  width: 419px;
  height: 57px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 1px solid #0f0e0e;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`
function Spots() {
  const [inputText, setInputText] = useState('')
  let inputHandler = (e) => {
    setInputText(e.target.value)
  }

  return (
    <Presentation>
      <Searchbar type="search" id="spot-search" onChange={inputHandler} />
      <SpotList input={inputText} />
    </Presentation>
  )
}

export default Spots
