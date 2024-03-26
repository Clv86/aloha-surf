import { Link } from 'react-router-dom'
import styled from 'styled-components'
import spotsCoordinate from '../../assets/spotsCoordinate.json'

function SpotList(props) {
  const spotNames = Object.entries(spotsCoordinate)
  const filteredData = spotNames.filter((el) => {
    if (props.input === '') {
      return el
    } else {
      return el[0].includes(props.input)
    }
  })
  return (
    <SpotPresentation>
      {filteredData.map((val, i) => (
        <SpotLink to={`/conditions/${val[0]}`}>
          <SpotName>{val[0]}</SpotName>
        </SpotLink>
      ))}
    </SpotPresentation>
  )
}
const SpotPresentation = styled.div`
  width: 60vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 11px;
  justify-content: left;
`
const SpotName = styled.p`
  color: #2e2e2e;
  font-family: 'Space Grotesk';
  font-size: 0.8em;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
`

const SpotLink = styled(Link)`
  display: flex;
  padding: 5px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  max-width: 160px;
  text-decoration: none;
  border-radius: 8px;
  border: 1px solid #000;
  background: rgba(255, 255, 255, 0.5);
`

const SpotPic = styled('img')`
  position: relative;
  max-width: 160px;
  height: 160px;
  padding: 0;
  margin: 0;
  border-radius: 0px 0px 20px 20px;
  @media (max-width: 412px) {
    max-width: 120px;
    height: 120px;
  }
`

export default SpotList
