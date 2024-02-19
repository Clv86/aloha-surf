import styled from 'styled-components'
import { useState } from 'react'
import { useEffect } from 'react'

function Description({ chooseFilter, chooseSpotList }) {
  const [inputText, setInputText] = useState('')
  const [showSpots, setShowSpots] = useState(false)
  let inputHandler = (e) => {
    setInputText(e.target.value)
  }

  useEffect(() => {
    chooseFilter(inputText)
  }, [inputText, chooseFilter])

  useEffect(() => {
    chooseSpotList(showSpots)
    console.log(showSpots)
  }, [showSpots, chooseSpotList])
  function openSpotList() {
    setShowSpots(true)
  }
  return (
    <DescriptionStyle>
      <DescriptionTitle>
        Les conditions du surf sur la côte ouest française
      </DescriptionTitle>
      <DescriptionText>
        Conditions météo de la côte Ouest française en temps réel avec prévision
        sur 7 jours et détails heure par heure.
      </DescriptionText>

      <Searchbar
        type="search"
        id="spot-search"
        placeholder="Rechercher un spot"
        onClick={openSpotList}
        onChange={inputHandler}
      />
    </DescriptionStyle>
  )
}

const DescriptionStyle = styled.div`
  position: absolute;
  top: 8%;
  left: 122px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  background-color: rgba(84, 168, 163, 0.5);
  padding: 16px;
  border-radius: 25px;
  box-shadow: 5px 3px 3px black;
  z-index: 3;
`
const DescriptionTitle = styled.h2`
  font-family: Amaranth;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  width: 419px;
  height: 71px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  margin: 0;
  padding-top: 0;
`

const DescriptionText = styled.p`
  font-family: Amaranth;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  width: 419px;
  height: 71px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 0;
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
`

export default Description
