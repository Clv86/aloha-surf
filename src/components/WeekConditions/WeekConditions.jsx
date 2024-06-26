import Table from '../Table/Table'
import Arrow from '../Arrow/Arrow'
import { useFetch } from '../../utils/hooks/dataFetching'
import spotsCoordinate from '../../assets/spotsCoordinate.json'
import styled from 'styled-components'
import windDirectionAnalysis from '../../utils/windDirectionAnalysis'
import createKeyGenerator from '../../utils/keyGenerator'
import windSpeedColor from '../../utils/styles/windSpeedColor'
import periodColor from '../../utils/styles/periodColor'
import shoreColor from '../../utils/styles/shoreColor'
import arrowDirection from '../../utils/styles/arrowDirection'

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
                  <Table.TD
                    style={shoreColor(
                      windDirectionAnalysis,
                      wave.daily.wave_direction_dominant[i],
                      wind.daily.wind_direction_10m_dominant[i],
                    )}
                  >
                    <Arrow
                      style={arrowDirection(
                        wave.daily.wave_direction_dominant[i],
                      )}
                    />
                  </Table.TD>
                  <Table.TD style={periodColor(wave.daily.wave_period_max[i])}>
                    {wave.daily.wave_period_max[i]}
                  </Table.TD>
                  <Table.TD
                    style={windSpeedColor(wind.daily.wind_speed_10m_max[i])}
                  >
                    {wind.daily.wind_speed_10m_max[i]}
                  </Table.TD>
                  <Table.TD
                    style={shoreColor(
                      windDirectionAnalysis,
                      wave.daily.wave_direction_dominant[i],
                      wind.daily.wind_direction_10m_dominant[i],
                    )}
                  >
                    <Arrow
                      style={arrowDirection(
                        wind.daily.wind_direction_10m_dominant[i],
                      )}
                    />
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
                    style={shoreColor(
                      windDirectionAnalysis,
                      wave.daily.wave_direction_dominant[i],
                      wind.daily.wind_direction_10m_dominant[i],
                    )}
                  >
                    <Arrow style={arrowDirection(val)} />
                  </Table.TD>
                ))}
              </Table.TR>
              <Table.TR>
                <Table.TH>Période (s)</Table.TH>
                {wave.daily.wave_period_max.map((val, i) => (
                  <Table.TD
                    style={periodColor(val)}
                    key={keygen(wave.daily.wave_height_max.name)}
                  >
                    {val}
                  </Table.TD>
                ))}
              </Table.TR>
              <Table.TR>
                <Table.TH>Vitesse Vent (km/h)</Table.TH>
                {wind.daily.wind_speed_10m_max.map((val, i) => (
                  <Table.TD
                    style={windSpeedColor(val)}
                    key={keygen(wave.daily.wave_height_max.name)}
                  >
                    {val}
                  </Table.TD>
                ))}
              </Table.TR>
              <Table.TR>
                <Table.TH>Direction Vent</Table.TH>
                {wind.daily.wind_direction_10m_dominant.map((val, i) => (
                  <Table.TD
                    key={keygen(wave.daily.wave_height_max.name)}
                    style={shoreColor(
                      windDirectionAnalysis,
                      wave.daily.wave_direction_dominant[i],
                      wind.daily.wind_direction_10m_dominant[i],
                    )}
                  >
                    <Arrow style={arrowDirection(val)} />
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
  width: max-content;
  max-height: 50dvh;
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
    max-height: 50dvh;
    height: max-content;
    padding: 8px;
    border-radius: 16px;
    border: 1px solid #fff;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    width: max-content;
    overflow: auto;
  }
  scrollbar-width: thin;
  &::-webkit-scrollbar {
    width: 0.25rem;
  }
`
export default WeekConditions
