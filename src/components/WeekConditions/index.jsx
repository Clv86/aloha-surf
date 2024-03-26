import Table from '../Table'
import DirectionArrow from '../../utils/styles/arrow'
import { useFetch } from '../../utils/hooks'
import spotsCoordinate from '../../assets/spotsCoordinate.json'
import styled from 'styled-components'

function WeekConditions(spotName) {
  const { name } = spotName
  const arrayCoordinates = Object.entries(spotsCoordinate)

  const weekDay = [
    'Dimanche',
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi',
    'Dimanche',
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi',
  ]
  const d = new Date()

  function filterIt(arr, searchKey) {
    return arr.filter(function (obj) {
      return Object.keys(obj).some(function (key) {
        return obj[key].includes(searchKey)
      })
    })
  }
  const location = filterIt(arrayCoordinates, name)

  const { wave, wind } = useFetch(
    `https://marine-api.open-meteo.com/v1/marine?latitude=${location[0][1][0]}&longitude=${location[0][1][1]}&daily=wave_height_max,wave_direction_dominant,wave_period_max&timezone=Europe%2FBerlin`,
    `https://api.open-meteo.com/v1/forecast?latitude=${location[0][1][0]}&longitude=${location[0][1][1]}&daily=wind_speed_10m_max,wind_direction_10m_dominant&timezone=Europe%2FBerlin`,
  )
  const TableSizer = styled.div`
    border-radius: 16px;
    border: 1px solid #fff;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);

    width: fit-content;
    max-width: 80vw;

    overflow: auto;
  `
  const TableScroll = styled.div``
  const VertTable = styled.div`
    display: none;
    @media (max-width: 554px) {
      display: block;
      height: 60vh;
      border-radius: 16px;
      border: 1px solid #fff;
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(5px);
      width: auto;
      overflow: auto;
    }
  `

  if (wind && wave) {
    return (
      <>
        <VertTable>
          <Table>
            <TableScroll>
              <Table.Head>
                <Table.TR>
                  <Table.TH>Cette semaine</Table.TH>
                  <Table.TH>Hauteur</Table.TH>
                  <Table.TH>Direction Vague</Table.TH>
                  <Table.TH>Période</Table.TH>
                  <Table.TH>Vitesse Vent</Table.TH>
                  <Table.TH>Direction Vent</Table.TH>
                </Table.TR>
              </Table.Head>
              <Table.Body>
                <Table.TD>
                  {wave.daily.wave_height_max.map((val, i) => (
                    <Table.TR>{weekDay[d.getDay() + i]}</Table.TR>
                  ))}
                </Table.TD>
                <Table.TD>
                  {wave.daily.wave_height_max.map((val, i) => (
                    <Table.TR>{val}</Table.TR>
                  ))}
                </Table.TD>
                <Table.TD>
                  {wave.daily.wave_direction_dominant.map((val, i) => (
                    <Table.TR>{DirectionArrow(val)}</Table.TR>
                  ))}
                </Table.TD>
                <Table.TD>
                  {wave.daily.wave_period_max.map((val, i) => (
                    <Table.TR>{val}</Table.TR>
                  ))}
                </Table.TD>
                <Table.TD>
                  {wind.daily.wind_speed_10m_max.map((val, i) => (
                    <Table.TR>{val}</Table.TR>
                  ))}
                </Table.TD>
                <Table.TD>
                  {wind.daily.wind_direction_10m_dominant.map((val, i) => (
                    <Table.TR>{DirectionArrow(val)}</Table.TR>
                  ))}
                </Table.TD>
              </Table.Body>
            </TableScroll>
          </Table>
        </VertTable>
        <TableSizer>
          <Table>
            <TableScroll>
              <Table.Head>
                <Table.TR>
                  <Table.TH>Cette semaine</Table.TH>
                  {wave.daily.wave_height_max.map((val, i) => (
                    <Table.TH>{weekDay[d.getDay() + i]}</Table.TH>
                  ))}
                </Table.TR>
              </Table.Head>
              <Table.Body>
                <Table.TR>
                  <Table.TH>Hauteur</Table.TH>
                  {wave.daily.wave_height_max.map((val, i) => (
                    <Table.TD>{val}</Table.TD>
                  ))}
                </Table.TR>
                <Table.TR>
                  <Table.TH>Direction Vague</Table.TH>
                  {wave.daily.wave_direction_dominant.map((val, i) => (
                    <Table.TD>{DirectionArrow(val)}</Table.TD>
                  ))}
                </Table.TR>
                <Table.TR>
                  <Table.TH>Période</Table.TH>
                  {wave.daily.wave_period_max.map((val, i) => (
                    <Table.TD>{val}</Table.TD>
                  ))}
                </Table.TR>
                <Table.TR>
                  <Table.TH>Vitesse Vent</Table.TH>
                  {wind.daily.wind_speed_10m_max.map((val, i) => (
                    <Table.TD>{val}</Table.TD>
                  ))}
                </Table.TR>
                <Table.TR>
                  <Table.TH>Direction Vent</Table.TH>
                  {wind.daily.wind_direction_10m_dominant.map((val, i) => (
                    <Table.TD>{DirectionArrow(val)}</Table.TD>
                  ))}
                </Table.TR>
              </Table.Body>
            </TableScroll>
          </Table>
        </TableSizer>
      </>
    )
  }
}

export default WeekConditions
