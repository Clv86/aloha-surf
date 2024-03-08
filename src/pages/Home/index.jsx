import Description from '../../components/Description'
import styled from 'styled-components'
import SpotList from '../../components/SpotList'
import { useState } from 'react'

function Home() {
  const [filter, setFilter] = useState('')
  const [SpotListOpen, setSpotListOpen] = useState(false)
  function chooseFilter(word) {
    setFilter(word)
  }
  function chooseSpotList(word) {
    setSpotListOpen(word)
  }
  return (
    <Main>
      <VerticalDisplayContainer $show={SpotListOpen}>
        <Description
          chooseFilter={chooseFilter}
          chooseSpotList={chooseSpotList}
        />
        <ShowVert>
          {SpotListOpen === true ? <SpotList input={filter} /> : null}
        </ShowVert>
      </VerticalDisplayContainer>
      <ShowHorizontal $show={SpotListOpen}>
        {SpotListOpen === true ? <SpotList input={filter} /> : null}
      </ShowHorizontal>
    </Main>
  )
}
const ShowHorizontal = styled.div`
  ${(props) =>
    props.$show === true
      ? 'background-color: rgba(84, 168, 163, 0.5);   box-shadow: 5px 3px 3px black;'
      : null}
  border-radius: 25px;
  position: absolute;
  right: 122px;
  top: 23%;
  width: 36%;
  height: 64%;
  padding: 2% 5% 3% 5%
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  overflow-x: hidden;
  z-index: 3;
  @media (max-width: 1175px) {
    display: none;
  }
`
const ShowVert = styled.div`
  display: none;
  @media (max-width: 1175px) {
    display: flex;
    z-index: 3;
    position: absolute;
    top: 16%;
    bottom: 8%;
    left: 4%;
    right: 4%;
    padding: 5% 0% 4% 0%;
    border-radius: 0 0 25px 25px;
    border-top: none;
  }
  @media (max-height: 500px) {
    top: 24%;
    left: 0;
    right: 0;
  }
`
const VerticalDisplayContainer = styled.div`
  position: absolute;
  top: 20%;
  left: 122px;
  right: 122px;
  height: 64%;
  display: flex;
  @media (max-width: 1175px) {
    ${(props) =>
      props.$show === true
        ? 'background-color: rgba(84, 168, 163, 0.5);   box-shadow: 5px 3px 3px black;'
        : null}
    top: 12%;
    bottom: 7%;
    height: auto;
    padding: 16px;
    border-radius: 25px;
    z-index: 3;
    position: absolute;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
  }
  @media (max-width: 1000px) {
    left: 4%;
    right: 4%;
  }
  @media (orientation: landscape) {
    top: 23%;
  }
`
const Main = styled.div`
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0;
  margin: 0;
`

export default Home
