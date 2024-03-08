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
  // @media (max-width: 1175px) {
  //   flex-direction: column;
  //   justify-content: center;
  //   align-items: center;
  //   flex-wrap: wrap;
  // background-color: red;
  // }
  @media (max-width: 554px) {
    top: 7%;
  }
`

export default Home
