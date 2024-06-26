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

function DayConditions(spotName) {
  const { name } = spotName
  const arrayCoordinates = Object.entries(spotsCoordinate)
  const keygen = createKeyGenerator()

  function filterIt(arr, searchKey) {
    return arr.filter(function (obj) {
      return Object.keys(obj).some(function (key) {
        return obj[key].includes(searchKey)
      })
    })
  }
  const location = filterIt(arrayCoordinates, name)

  const { wave, wind } = useFetch(
    `https://marine-api.open-meteo.com/v1/marine?latitude=${location[0][1][0]}&longitude=${location[0][1][1]}&hourly=wave_height,wave_direction,wave_period&timezone=Europe%2FBerlin&forecast_days=1`,
    `https://api.open-meteo.com/v1/forecast?latitude=${location[0][1][0]}&longitude=${location[0][1][1]}&hourly=wind_speed_10m,wind_direction_10m&timezone=Europe%2FBerlin&forecast_days=1`,
  )
  if (wind && wave) {
    return (
      <>
        <VertTable>
          <Table>
            <Table.Head>
              <Table.TR>
                <Table.TH>Heure</Table.TH>
                <Table.TH>Hauteur (m)</Table.TH>
                <Table.TH>Direction Vague</Table.TH>
                <Table.TH>Période (s)</Table.TH>
                <Table.TH>Vitesse Vent (km/h)</Table.TH>
                <Table.TH>Direction Vent</Table.TH>
              </Table.TR>
            </Table.Head>
            <Table.Body>
              {wave.hourly.wave_height.map((val, i) => (
                <Table.TR key={keygen(wave.hourly.wave_height.name)}>
                  <Table.TH>{i}h</Table.TH>
                  <Table.TD>{val}</Table.TD>
                  <Table.TD
                    style={shoreColor(
                      windDirectionAnalysis,
                      wave.hourly.wave_direction[i],
                      wind.hourly.wind_direction_10m[i],
                    )}
                  >
                    <Arrow
                      style={arrowDirection(wave.hourly.wave_direction[i])}
                    />
                  </Table.TD>
                  <Table.TD style={periodColor(wave.hourly.wave_period[i])}>
                    {wave.hourly.wave_period[i]}
                  </Table.TD>
                  <Table.TD
                    style={windSpeedColor(wind.hourly.wind_speed_10m[i])}
                  >
                    {wind.hourly.wind_speed_10m[i]}
                  </Table.TD>
                  <Table.TD
                    style={shoreColor(
                      windDirectionAnalysis,
                      wave.hourly.wave_direction[i],
                      wind.hourly.wind_direction_10m[i],
                    )}
                  >
                    <Arrow
                      style={arrowDirection(wind.hourly.wind_direction_10m[i])}
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
                <Table.TH>Aujourd'hui</Table.TH>
                {wave.hourly.wave_height.map((val, i) => (
                  <Table.TH key={keygen(wave.hourly.wave_height.name)}>
                    {i}h
                  </Table.TH>
                ))}
              </Table.TR>
            </Table.Head>
            <Table.Body>
              <Table.TR>
                <Table.TH>Hauteur (m)</Table.TH>
                {wave.hourly.wave_height.map((val, i) => (
                  <Table.TD key={keygen(wave.hourly.wave_height.name)}>
                    {val}
                  </Table.TD>
                ))}
              </Table.TR>
              <Table.TR>
                <Table.TH>Direction Vague</Table.TH>
                {wave.hourly.wave_direction.map((val, i) => (
                  <Table.TD
                    key={keygen(wave.hourly.wave_height.name)}
                    style={shoreColor(
                      windDirectionAnalysis,
                      wave.hourly.wave_direction[i],
                      wind.hourly.wind_direction_10m[i],
                    )}
                  >
                    <Arrow style={arrowDirection(val)} />
                  </Table.TD>
                ))}
              </Table.TR>
              <Table.TR>
                <Table.TH>Période (s)</Table.TH>
                {wave.hourly.wave_period.map((val, i) => (
                  <Table.TD
                    style={periodColor(val)}
                    key={keygen(wave.hourly.wave_height.name)}
                  >
                    {val}
                  </Table.TD>
                ))}
              </Table.TR>
              <Table.TR>
                <Table.TH>Vitesse Vent (km/h)</Table.TH>
                {wind.hourly.wind_speed_10m.map((val, i) => (
                  <Table.TD
                    style={windSpeedColor(wind.hourly.wind_speed_10m[i])}
                    key={keygen(wave.hourly.wave_height.name)}
                  >
                    {val}
                  </Table.TD>
                ))}
              </Table.TR>
              <Table.TR>
                <Table.TH>Direction Vent</Table.TH>
                {wind.hourly.wind_direction_10m.map((val, i) => (
                  <Table.TD
                    key={keygen(wave.hourly.wave_height.name)}
                    style={shoreColor(
                      windDirectionAnalysis,
                      wave.hourly.wave_direction[i],
                      wind.hourly.wind_direction_10m[i],
                    )}
                  >
                    <Arrow style={arrowDirection(val)} />
                  </Table.TD>
                ))}
              </Table.TR>
            </Table.Body>
          </Table>
        </TableSizer>
      </>
    )
  }
}
const VertTable = styled.div`
  display: none;
  @media (max-width: 554px) {
    display: block;
    max-height: 78dvh;
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
const TableSizer = styled.div`
  border-radius: 16px;
  border: 1px solid #fff;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  width: max-content;
  max-width: 80vw;
  padding: 8px;
  overflow: auto;
  scrollbar-width: none;
  @media (max-width: 1270px) {
    scrollbar-width: thin;
    &::-webkit-scrollbar {
      width: 0.25rem;
    }
  }
  @media (max-width: 554px) {
    display: none;
  }
`

export default DayConditions
