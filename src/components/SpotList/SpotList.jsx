import { Link } from 'react-router-dom'
import styled from 'styled-components'
import spotsCoordinate from '../../assets/spotsCoordinate.json'
import titleCase from '../../utils/titleCase'

function SpotList(props) {
  const spotNames = Object.entries(spotsCoordinate)
  const titleCaseProps = titleCase(props.input)
  const filteredData = spotNames.filter((el) => {
    if (props.input === '') {
      return el
    } else {
      return el[0].includes(titleCaseProps)
    }
  })
  return (
    <SpotPresentation>
      {filteredData.map((val, i) => (
        <SpotLink key={val[0]} to={`/conditions/${val[0]}`}>
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

export default SpotList
