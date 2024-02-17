import { Link } from 'react-router-dom'
import styled from 'styled-components'
import spotsCoordinate from '../../assets/spotsCoordinate.json'

const List = styled.div``
const Spot = styled.div``
const SpotLink = styled(Link)`
  display: flex;
  max-width: 137px;
  height: 29px;
  padding: 0;
  margin: 0;
  justify-content: center;
  align-items: center;
  // border-radius: 20px 20px 0px 0px;
  // background: #062848;
  // box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: black;
  text-align: center;
  font-family: Amaranth;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
  line-height: normal;
`

function DetailedSpotlist(props) {
  const spotNames = Object.entries(spotsCoordinate)
  console.log(props.input)
  const filteredData = spotNames.filter((el) => {
    if (props.input === '') {
      return el
    } else {
      return el[0].includes(props.input)
    }
  })
  return (
    <List>
      {filteredData.map((val, i) => (
        <Spot>
          <SpotLink to={`/conditions/${val[0]}`}>{val[0]}</SpotLink>
        </Spot>
      ))}
    </List>
  )
}

export default DetailedSpotlist
