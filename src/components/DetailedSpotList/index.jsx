import { Link } from 'react-router-dom'
import styled from 'styled-components'
import spotsCoordinate from '../../assets/spotsCoordinate.json'
import HourConditions from '../HourConditions'
import Table from '../Table'

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
      <TH>
        <Title>Liste des spots</Title>
        <Searchbar></Searchbar>
      </TH>
      <Table.Head>
        <Table.TR>
          <Table.TH>Hauteur</Table.TH>
          <Table.TH>Direction Vague</Table.TH>
          <Table.TH>Période</Table.TH>
          <Table.TH>Vitesse Vent</Table.TH>
          <Table.TH>Direction Vent</Table.TH>
        </Table.TR>
      </Table.Head>
      {filteredData.map((val, i) => (
        <Spot>
          <SpotLink to={`/conditions/${val[0]}`}>{val[0]}</SpotLink>
          <HourConditions name={val[0]} />
        </Spot>
      ))}
    </List>
  )
}

const List = styled.div`
  position: absolute;
  top: 8%;
  bottom: 8%;
  left: 122px;
  right: 122px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  background-color: rgba(84, 168, 163, 0.5);
  padding: 16px;
  border-radius: 25px;
  box-shadow: 5px 3px 3px black;
  z-index: 3;
`
const Spot = styled.div`
  display: block;
`

const SpotLink = styled(Link)`
  display: inline;
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
  z-index: 5;
`
const Title = styled.h1`
  flex: 1;
`
const Searchbar = styled.input`
  width: 180px;
  height: 32px;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 50%;
  flex: 2;
  flex-shrink: 0;
  border-radius: 20px;
  border: 1px solid #0f0e0e;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding-left: 20px;
  font-family: Amaranth;
`
const TH = styled.div`
  display: flex;
`

export default DetailedSpotlist
