import styled from 'styled-components'
import { Link } from 'react-router-dom'

import spotsCoordinate from '../../assets/spotsCoordinate.json'

const Presentation = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 17%;
  bottom: 8%;
  left: 0%;
  right: 122px;
  background-color: #54a8a3;
`

const SpotLink = styled(Link)`
  display: flex;
  width: 117px;
  height: 29px;
  padding: 14px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #062848;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: #fff;
  text-align: center;
  font-family: Amaranth;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 122px;
`

function Spots() {
  const spotNames = Object.entries(spotsCoordinate)

  return (
    <Presentation>
      {spotNames.map((val, i) => (
        <SpotLink to={`/conditions/${val[0]}`}>{val[0]}</SpotLink>
      ))}
    </Presentation>
  )
}

export default Spots
