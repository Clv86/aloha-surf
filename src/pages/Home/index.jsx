import Description from '../../components/Description/Description'
import styled from 'styled-components'
import SpotList from '../../components/SpotList/SpotList'
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
      <SearchZone>
        <Description
          chooseFilter={chooseFilter}
          chooseSpotList={chooseSpotList}
        />
        {SpotListOpen === true ? <SpotList input={filter} /> : null}
      </SearchZone>
    </Main>
  )
}
const SearchZone = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: fit-content;
`

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`

export default Home
