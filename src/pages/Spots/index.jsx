import arrow from '../../assets/Arrow 1.svg'
import styled from 'styled-components'
import React from 'react'
import spotsCoordinate from '../../assets/spotsCoordinate.json'
import { useParams, Link } from 'react-router-dom'

function Spots() {
  const spotNames = Object.entries(spotsCoordinate)
  const { spotsearch } = useParams()
  let filteredData = spotNames.filter((el) => {
    if (spotsearch === undefined) {
      return el
    } else {
      return el[0].includes(spotsearch)
    }
  })
  console.log(filteredData)
  return (
    <Main>
      {filteredData.length === 10 ? (
        <Title>Listes des spots disponibles</Title>
      ) : 0 ? (
        <Title>Aucun résultat trouvé</Title>
      ) : 1 ? (
        <Title>{filteredData.length} résultat trouvé</Title>
      ) : (
        <Title>{filteredData.length} résultats trouvés</Title>
      )}
      <Presentation>
        {filteredData.map((val, i) => (
          <SpotSquare to={`/conditions/${val[0]}`}>
            <PicContainer>
              <SpotPic
                src={require(`../../assets/SpotsPictures/${val[0]}.jpg`)}
                alt={`/src/assets/SpotsPictures/${val[0]}.jpg`}
              ></SpotPic>
            </PicContainer>
            <TitleContainer>
              <SpotTitle>{val[0]}</SpotTitle>
              <ArrowClick src={arrow} alt="arrow"></ArrowClick>
            </TitleContainer>
            <SpotDescription></SpotDescription>
          </SpotSquare>
        ))}
      </Presentation>
    </Main>
  )
}
const Title = styled.h1`
  color: #3c3c3c;
  font-family: 'Space Grotesk';
  font-size: clamp(1.3rem, 8vw, 2rem);
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 30px 0 auto;
`
const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px;
`
//const Searchbar = styled.input`
//border: none;
//background-color: transparent;
//color: #2e2e2e;
//font-family: 'Space Grotesk';
//font-size: 24px;
//font-style: normal;
//font-weight: 400;
//line-height: normal;
//&:focus {
//outline: none;
//}
//`

const PicContainer = styled.div`
  object-fit: cover;
  overflow-y: hidden;
  position: relative;
  aspect-ratio: 2 / 1;
  width: inherit;
  padding: 0;
  margin: 0;
`
const ArrowClick = styled('img')`
  height: 16px;
`
const SpotSquare = styled(Link)`
  aspect-ratio: 1 / 1;
  text-decoration: none;
  background: #fff;
  @media (max-width: 563px) {
    flex: 0 0 40%;
  }
`
const SpotPic = styled('img')`
  position: absolute;
  top: -9999px;
  bottom: -9999px;
  left: -9999px;
  right: -9999px;
  margin: auto;
  max-width: 100%;
`
const SpotTitle = styled.h2`
  margin-bottom: 0;
  color: #3c3c3c;
  font-family: 'Space Grotesk';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
const SpotDescription = styled.div``
const Main = styled.div`
  margin: 0 72px 0 72px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 86vh;
  @media (max-width: 724px) {
    margin: 0 28px 0 28px;
  }
`

const Presentation = styled.div`
  padding-top: 16px;
  padding-bottom: 64px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  width: 100%;
  height: 80vh;
  margin-left: auto;
  margin-right: auto;
  overflow: scroll;
  gap: 4vh;
`

export default Spots
