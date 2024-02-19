import Description from '../../components/Description'
import surf1 from '../../assets/gian-luca-modified.jpg'
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
      <SurfPic src={surf1} alt="surf-pic" />
      <Description
        chooseFilter={chooseFilter}
        chooseSpotList={chooseSpotList}
      />
      {SpotListOpen === true ? <SpotList input={filter} /> : null}
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

export default Home
