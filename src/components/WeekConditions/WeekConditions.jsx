import Table from '../Table/Table'
import DirectionArrow from '../../utils/styles/arrow'
import { useFetch } from '../../utils/hooks'
import spotsCoordinate from '../../assets/spotsCoordinate.json'
import styled from 'styled-components'
import windAnalysis from '../../utils/windAnalysis'
import createKeyGenerator from '../../utils/keyGenerator'

function WeekConditions(spotName) {
  const { name } = spotName
  const arrayCoordinates = Object.entries(spotsCoordinate)
  const keygen = createKeyGenerator()

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
  function colorConditions(wave, wind, i) {
    let result = windAnalysis(
      wave.daily.wave_direction_dominant[i],
      wind.daily.wind_direction_10m_dominant[i],
    )
    if (result === 'Onshore') {
      return { color: 'red' }
    } else if (result === 'Offshore') {
      return { color: 'green' }
    } else {
      return null
    }
  }
  const { wave, wind } = useFetch(
    `https://marine-api.open-meteo.com/v1/marine?latitude=${location[0][1][0]}&longitude=${location[0][1][1]}&daily=wave_height_max,wave_direction_dominant,wave_period_max&timezone=Europe%2FBerlin`,
    `https://api.open-meteo.com/v1/forecast?latitude=${location[0][1][0]}&longitude=${location[0][1][1]}&daily=wind_speed_10m_max,wind_direction_10m_dominant&timezone=Europe%2FBerlin`,
  )
  if (wind && wave) {
    return (
      <div>
        <VertTable>
          <Table>
            <Table.Head>
              <Table.TR>
                <Table.TH>Cette semaine</Table.TH>
                <Table.TH>Hauteur (m)</Table.TH>
                <Table.TH>Direction Vague</Table.TH>
                <Table.TH>Période (s)</Table.TH>
                <Table.TH>Vitesse Vent (km/h)</Table.TH>
                <Table.TH>Direction Vent</Table.TH>
              </Table.TR>
            </Table.Head>
            <Table.Body>
              {wave.daily.wave_height_max.map((val, i) => (
                <Table.TR key={keygen(wave.daily.wave_height_max.name)}>
                  <Table.TH>{weekDay[i]}</Table.TH>
                  <Table.TD>{val}</Table.TD>
                  <Table.TD style={colorConditions(wave, wind, i)}>
                    {DirectionArrow(wave.daily.wave_direction_dominant[i])}
                  </Table.TD>
                  <Table.TD>{wave.daily.wave_period_max[i]}</Table.TD>
                  <Table.TD>{wind.daily.wind_speed_10m_max[i]}</Table.TD>
                  <Table.TD style={colorConditions(wave, wind, i)}>
                    {DirectionArrow(wind.daily.wind_direction_10m_dominant[i])}
                  </Table.TD>
                </Table.TR>
              ))}
            </Table.Body>
          </Table>
        </VertTable>
        <TableSizer>
          <Table>
            <Table.Head>
              <Table.TR>
                <Table.TH>Cette semaine</Table.TH>
                {wave.daily.wave_height_max.map((val, i) => (
                  <Table.TH key={keygen(wave.daily.wave_height_max.name)}>
                    {weekDay[d.getDay() + i]}
                  </Table.TH>
                ))}
              </Table.TR>
            </Table.Head>
            <Table.Body>
              <Table.TR>
                <Table.TH>Hauteur (m)</Table.TH>
                {wave.daily.wave_height_max.map((val, i) => (
                  <Table.TD key={keygen(wave.daily.wave_height_max.name)}>
                    {val}
                  </Table.TD>
                ))}
              </Table.TR>
              <Table.TR>
                <Table.TH>Direction Vague</Table.TH>
                {wave.daily.wave_direction_dominant.map((val, i) => (
                  <Table.TD
                    key={keygen(wave.daily.wave_height_max.name)}
                    style={colorConditions(wave, wind, i)}
                  >
                    {DirectionArrow(val)}
                  </Table.TD>
                ))}
              </Table.TR>
              <Table.TR>
                <Table.TH>Période (s)</Table.TH>
                {wave.daily.wave_period_max.map((val, i) => (
                  <Table.TD key={keygen(wave.daily.wave_height_max.name)}>
                    {val}
                  </Table.TD>
                ))}
              </Table.TR>
              <Table.TR>
                <Table.TH>Vitesse Vent (km/h)</Table.TH>
                {wind.daily.wind_speed_10m_max.map((val, i) => (
                  <Table.TD key={keygen(wave.daily.wave_height_max.name)}>
                    {val}
                  </Table.TD>
                ))}
              </Table.TR>
              <Table.TR>
                <Table.TH>Direction Vent</Table.TH>
                {wind.daily.wind_direction_10m_dominant.map((val, i) => (
                  <Table.TD
                    key={keygen(wave.daily.wave_height_max.name)}
                    style={colorConditions(wave, wind, i)}
                  >
                    {DirectionArrow(val)}
                  </Table.TD>
                ))}
              </Table.TR>
            </Table.Body>
          </Table>
        </TableSizer>
      </div>
    )
  }
}
const TableSizer = styled.div`
  border-radius: 16px;
  border: 1px solid #fff;
  padding: 8px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  width: fit-content;
  max-width: 80vw;
  overflow: auto;
  @media (max-width: 554px) {
    display: none;
  }
  scrollbar-width: none;
  @media (max-width: 633px) {
    scrollbar-width: thin;
    &::-webkit-scrollbar {
      width: 0.25rem;
    }
  }
`
const VertTable = styled.div`
  display: none;
  @media (max-width: 554px) {
    display: block;
    height: 50dvh;
    padding: 8px;
    border-radius: 16px;
    border: 1px solid #fff;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    width: auto;
    overflow: auto;
  }
  scrollbar-width: thin;
  &::-webkit-scrollbar {
    width: 0.25rem;
  }
`
export default WeekConditions
