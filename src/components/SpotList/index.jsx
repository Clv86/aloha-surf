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
          <SpotPic
            src={require(`../../assets/SpotsPictures/${val[0]}.jpg`)}
            alt={`/src/assets/SpotsPictures/${val[0]}.jpg`}
          ></SpotPic>
        </SpotLink>
      ))}
    </SpotPresentation>
  )
}
const SpotPresentation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  overflow-x: hidden;
  // background-color: red;
  // @media (max-width: 1175px) {
  //   top: 24.1%;
  //   height: 50%;
  //   left: 4%;
  //   right: 4%;
  // width: auto;
  //   padding: 1% 0% 4% 0%;
  //   border-radius: 0 0 25px 25px;
  //   border-top: none;
  // }
  // @media (max-width: 554px) {
  //   top: 23.4%;
  //   height: 60%;
  // }
  // @media (-webkit-min-device-pixel-ratio: 2),
  //   (min-resolution: 192dpi) and (max-width: 554px) {
  //   top: 23.2%;
  //   height: 60%;
  // }
`
const SpotName = styled.p`
  display: flex;
  max-width: 160px;
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
  @media (max-width: 412px) {
    max-width: 120px;
  }
`

const SpotLink = styled(Link)`
  max-width: 160px;
  height: 160px;
  margin: 15px;
  padding-bottom: 0;
  overflow: hidden;
  border-radius: 0px 0px 20px 20px;
  text-decoration: none;
  @media (max-width: 412px) {
    max-width: 120px;
    height: 120px;
  }
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
