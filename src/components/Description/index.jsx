import styled from 'styled-components'
import { useState, useEffect } from 'react'
import searchButton from '../../assets/SearchIcon.png'
import { Link, useNavigate } from 'react-router-dom'
import titleCase from '../../utils/titleCase'

function Description({ chooseFilter, chooseSpotList, filter }) {
  const [inputText, setInputText] = useState('')
  const [showSpots, setShowSpots] = useState(false)
  const navigate = useNavigate()

  let inputHandler = (e) => {
    const myRe = /^[A-Za-z ]+$/
    if (e.target.value === '' || myRe.test(e.target.value))
      setInputText(titleCase(e.target.value))
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
  useEffect(() => {
    const listener = (event) => {
      if (
        (event.code === 'Enter' || event.code === 'NumpadEnter') &&
        showSpots
      ) {
        event.preventDefault()
        navigate(`/spots/${inputText}`)
      }
    }
    document.addEventListener('keydown', listener)
    return () => {
      document.removeEventListener('keydown', listener)
    }
  }, [inputText, navigate, showSpots])
  return (
    <SearchContainer>
      <Searchbar
        type="search"
        id="spot-search"
        placeholder="Rechercher un spot"
        value={inputText}
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
  width: clamp(1rem, 6vw, 2.5rem);
  height: clamp(1rem, 6vw, 2.5rem);
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
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  &:focus {
    outline: none;
  }
`

export default Description
