import styled from 'styled-components'
import { useState } from 'react'
import { useEffect } from 'react'

function Description({ chooseFilter, chooseSpotList, filter }) {
  const [inputText, setInputText] = useState('')
  const [showSpots, setShowSpots] = useState(false)
  let inputHandler = (e) => {
    setInputText(e.target.value)
  }
  let bottomBorder = true

  useEffect(() => {
    chooseFilter(inputText)
  }, [inputText, chooseFilter])

  useEffect(() => {
    chooseSpotList(showSpots)
    console.log(showSpots)
  }, [showSpots, chooseSpotList])
  function openSpotList() {
    setShowSpots(true)
    bottomBorder = false
  }
  console.log(`Valeur : ${bottomBorder}`)
  return (
    <DescriptionStyle variant={showSpots}>
      <TextContainer>
        <DescriptionTitle>
          Les conditions du surf sur la côte ouest française
        </DescriptionTitle>
        <DescriptionText>
          Conditions météo de la côte Ouest française en temps réel avec
          prévision sur 7 jours et détails heure par heure.
        </DescriptionText>
      </TextContainer>

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
const TextContainer = styled.div``
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
  height: 40%;
  z-index: 3;
  @media (max-width: 1175px) {
    flex-direction: row;
    gap: 40px;
    left: 4%;
    right: 4%;
    ${(props) =>
      props.variant === false
        ? 'height: 12%; border-radius: 25px; box-shadow: 5px 3px 3px black; border-bottom: 5px 3px 3px black;'
        : 'height: 10%; border-radius: 25px 25px 0 0; box-shadow: none; border-bottom: none;'}
  }
  @media (max-width: 726px) {
    gap: 12px;
  }
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
  @media (max-width: 726px) {
    width: auto;
    font-size: 18px;
  }
  @media (max-width: 654px) {
    font-size: 14px;
  }
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
  @media (max-width: 1175px) {
    display: none;
  }
`

const Searchbar = styled.input`
  width: 419px;
  height: 57px;
  border-radius: 20px;
  border: 1px solid #0f0e0e;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding-left: 20px;
  font-family: Amaranth;
  @media (max-width: 1175px) {
    align-item: flex-start;
  }
`

export default Description
