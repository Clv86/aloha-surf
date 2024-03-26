import styled from 'styled-components'
import { useState } from 'react'
import { useEffect } from 'react'
import searchButton from '../../assets/SearchIcon.png'
import { Link } from 'react-router-dom'

function Description({ chooseFilter, chooseSpotList, filter }) {
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
  }, [showSpots, chooseSpotList])
  function openSpotList() {
    setShowSpots(true)
  }
  return (
    <SearchContainer>
      <Searchbar
        type="search"
        id="spot-search"
        placeholder="Rechercher un spot"
        onClick={openSpotList}
        onChange={inputHandler}
      />
      <SearchButton to={`/spots/${inputText}`} />
    </SearchContainer>
  )
}
const SearchContainer = styled.div`
  display: flex;
  width: 60vw;
  height: fit-content;
  padding: 18px 24px;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 4px;
  border: 1px solid #fff;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(7px);
`
const SearchButton = styled(Link)`
  width: clamp(1.5rem, 7vw, 2.5rem);
  height: clamp(1.5rem, 7vw, 2.5rem);
  border: none;
  flex-shrink: 0;
  background: url(${searchButton}) lightgray 50% / contain no-repeat;
  background-color: transparent;
`
const Searchbar = styled.input`
  border: none;
  width: 80%;
  background-color: transparent;
  color: #2e2e2e;
  font-family: 'Space Grotesk';
  font-size: clamp(1rem, 2.5vw, 2rem);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  &:focus {
    outline: none;
  }
`

export default Description
