import { Link } from 'react-router-dom'
import styled from 'styled-components'
import spotsCoordinate from '../../assets/spotsCoordinate.json'

function SpotList(props) {
  const spotNames = Object.entries(spotsCoordinate)
  console.log(props.input)
  const filteredData = spotNames.filter((el) => {
    if (props.input === '') {
      return el
    } else {
      return el[0].includes(props.input)
    }
  })
  console.log(filteredData)
  return (
    <SpotPresentation>
      {filteredData.map((val, i) => (
        <Spot>
          <SpotLink to={`/conditions/${val[0]}`}>{val[0]}</SpotLink>
          <SpotPic
            src={require(`../../assets/SpotsPictures/${val[0]}.jpg`)}
            alt={`/src/assets/SpotsPictures/${val[0]}.jpg`}
          ></SpotPic>
        </Spot>
      ))}
    </SpotPresentation>
  )
}

const Spot = styled('div')`
  max-width: 160px;
  height: 160px;
  margin: 15px;
  padding-bottom: 0;
  overflow: hidden;
  border-radius: 0px 0px 20px 20px;
`
const SpotLink = styled(Link)`
  display: flex;
  max-width: 180px;
  height: 29px;
  padding: 0;
  margin: 0;
  justify-content: center;
  align-items: center;
  border-radius: 20px 20px 0px 0px;
  background: #062848;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: #fff;
  text-align: center;
  font-family: Amaranth;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
  line-height: normal;
`

const SpotPic = styled('img')`
  position: relative;
  max-width: 180px;
  height: 180px;
  padding: 0;
  margin: 0;
  border-radius: 0px 0px 20px 20px;
`
const SpotPresentation = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  position: absolute;
  right: 122px;
  top: 8%;
  width: 30%;
  height: 60%;
  padding: 2% 5% 3% 5%;
  background-color: rgba(84, 168, 163, 0.5);
  border-radius: 25px;
  box-shadow: 5px 3px 3px black;
  overflow-x: hidden;
  z-index: 3;
`

export default SpotList
