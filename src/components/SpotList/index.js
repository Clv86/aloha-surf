import { Link } from 'react-router-dom'
import styled from 'styled-components'
import spotsCoordinate from '../../assets/spotsCoordinate.json'

const Spot = styled('div')`
  weight: 40%;
  height: 40%;
  margin-bottom: 15px;
  margin-top: 15px;
  overflow: hidden;
  border-radius: 0px 0px 20px 20px;
`
const SpotLink = styled(Link)`
  display: flex;
  max-width: 137px;
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
  line-height: normal;
`

const SpotPic = styled('img')`
  position: relative;
  max-width: 137px;
  height: 134.8px;
  padding: 0;
  margin: 0;
  border-radius: 0px 0px 20px 20px;
`

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
    <>
      {filteredData.map((val, i) => (
        <Spot>
          <SpotLink to={`/conditions/${val[0]}`}>{val[0]}</SpotLink>
          <SpotPic
            src={require(`../../assets/SpotsPictures/${val[0]}.jpg`)}
            alt={`/src/assets/SpotsPictures/${val[0]}.jpg`}
          ></SpotPic>
        </Spot>
      ))}
    </>
  )
}

export default SpotList
