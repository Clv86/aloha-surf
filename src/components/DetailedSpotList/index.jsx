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
      <LeftSide>
        <Title>Liste des spots :</Title>
        <Description>
          Voici la liste des spots disponibles avec les conditions du jour pour
          chacun d'entre eux. Vous pouvez cliquez sur les noms pour plus de
          détails !
        </Description>
      </LeftSide>
      <Table>
        <TableScroll>
          <Table.Head>
            <Table.TR>
              <Table.TH>Spots</Table.TH>
              <Table.TH>Hauteur</Table.TH>
              <Table.TH>Direction Vague</Table.TH>
              <Table.TH>Période</Table.TH>
              <Table.TH>Vitesse Vent</Table.TH>
              <Table.TH>Direction Vent</Table.TH>
            </Table.TR>
          </Table.Head>

          <Table.Body>
            {filteredData.map((val, i) => (
              <Table.TR>
                <Table.TH>
                  <SpotLink to={`/conditions/${val[0]}`}>{val[0]}</SpotLink>
                </Table.TH>
                <HourConditions name={val[0]} />
              </Table.TR>
            ))}
          </Table.Body>
        </TableScroll>
      </Table>
    </List>
  )
}

const TableScroll = styled.div`
  height: 350px;
  overflow: auto;
`
const Description = styled.p`
  font-family: Amaranth;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
const LeftSide = styled.div`
  padding: 0 2% 2% 2%;
`
const List = styled.div`
  position: absolute;
  top: 8%;
  bottom: 16%;
  left: 122px;
  right: 122px;
  display: flex;
  flex-direction: block;
  justify-content: space-between;
  background-color: rgba(84, 168, 163, 0.5);
  padding: 2%;
  border-radius: 25px;
  box-shadow: 5px 3px 3px black;
  z-index: 3;
`
const Title = styled.h1`
  position: relative;
  padding: 0;
  margin-top: 2%;
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

export default DetailedSpotlist
