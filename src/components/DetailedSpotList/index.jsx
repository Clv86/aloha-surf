import { Link } from 'react-router-dom'
import styled from 'styled-components'
import spotsCoordinate from '../../assets/spotsCoordinate.json'
import HourConditions from '../HourConditions'
import Table from '../Table'

function DetailedSpotlist(props) {
  const spotNames = Object.entries(spotsCoordinate)
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
          chacun d'entre eux. Cliquez sur les noms pour plus de détails !
        </Description>
      </LeftSide>
      <TableSizer>
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
      </TableSizer>
    </List>
  )
}
const TableSizer = styled.div`
  width: 550px;
  margin: auto;
  overflow: hidden;
  @media (max-width: 628px) {
    width: auto;
    height: auto;
    margin-top: 0;
    margin-bottom: 0;
  }
  @media (max-height: 490px) {
    width: 490px;
  }
`
const TableScroll = styled.div`
  height: 350px;
  overflow: auto;
  @media (max-width: 1000px) {
    height: 250px;
  }
`
const Description = styled.p`
  font-family: Amaranth;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-height: 490px) {
    margin-top: 0;
  }
`
const LeftSide = styled.div`
  padding: 0 2% 2% 2%;
  @media (max-height: 490px) {
    padding-bottom: 0;
  }
`
const List = styled.div`
  display: flex;
  gap: 32px;
  flex-direction: block;
  justify-content: space-between;
  background-color: rgba(84, 168, 163, 0.5);
  padding: 2%;
  border-radius: 25px;
  box-shadow: 5px 3px 3px black;
  z-index: 2;
  @media (max-width: 1000px) {
    flex-direction: column;
    left: 4%;
    right: 4%;
    justify-content: start;
  }
`
const Title = styled.h1`
  position: relative;
  padding: 0;
  margin-top: 2%;
  @media (max-height: 490px) {
    margin: 0;
  }
`
const SpotLink = styled(Link)`
  display: inline;
  max-width: 137px;
  height: 29px;
  padding: 0;
  margin: 0;
  justify-content: center;
  align-items: center;
  color: black;
  text-align: center;
  font-family: Amaranth;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
  line-height: normal;
  &:hover {
    color: rgb(84, 168, 163);
  }
`

export default DetailedSpotlist
