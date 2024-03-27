import Table from '../Table'
import DirectionArrow from '../../utils/styles/arrow'
import { useFetch } from '../../utils/hooks'
import spotsCoordinate from '../../assets/spotsCoordinate.json'
import styled from 'styled-components'
function DayConditions(spotName) {
  const { name } = spotName
  const arrayCoordinates = Object.entries(spotsCoordinate)

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
      <div>
        <VertTable>
          <Table>
            <TableScroll>
              <Table.Head>
                <Table.TR>
                  <Table.TH>Heure</Table.TH>
                  <Table.TH>Hauteur</Table.TH>
                  <Table.TH>Direction Vague</Table.TH>
                  <Table.TH>Période</Table.TH>
                  <Table.TH>Vitesse Vent</Table.TH>
                  <Table.TH>Direction Vent</Table.TH>
                </Table.TR>
              </Table.Head>
              <Table.Body>
                {wave.hourly.wave_height.map((val, i) => (
                  <Table.TR>
                    <Table.TH>{i}h</Table.TH>
                    <Table.TD>{val}</Table.TD>
                    <Table.TD>{wave.hourly.wave_direction[i]}</Table.TD>
                    <Table.TD>{wave.hourly.wave_period[i]}</Table.TD>
                    <Table.TD>{wind.hourly.wind_speed_10m[i]}</Table.TD>
                    <Table.TD>{wind.hourly.wind_direction_10m[i]}</Table.TD>
                  </Table.TR>
                ))}
                <Table.TD>
                  {wave.hourly.wave_height.map((val, i) => (
                    <Table.TR>{i}h</Table.TR>
                  ))}
                </Table.TD>
                <Table.TD>
                  {wave.hourly.wave_height.map((val, i) => (
                    <Table.TR>{val}</Table.TR>
                  ))}
                </Table.TD>
                <Table.TD>
                  {wave.hourly.wave_direction.map((val, i) => (
                    <Table.TR>{DirectionArrow(val)}</Table.TR>
                  ))}
                </Table.TD>
                <Table.TD>
                  {wave.hourly.wave_period.map((val, i) => (
                    <Table.TR>{val}</Table.TR>
                  ))}
                </Table.TD>
                <Table.TD>
                  {wind.hourly.wind_speed_10m.map((val, i) => (
                    <Table.TR>{val}</Table.TR>
                  ))}
                </Table.TD>
                <Table.TD>
                  {wind.hourly.wind_direction_10m.map((val, i) => (
                    <Table.TR>{DirectionArrow(val)}</Table.TR>
                  ))}
                </Table.TD>
              </Table.Body>
            </TableScroll>
          </Table>
        </VertTable>
        <Table>
          <TableSizer>
            <Table.Head>
              <Table.TR>
                <Table.TH>Aujourd'hui</Table.TH>
                {wave.hourly.wave_height.map((val, i) => (
                  <Table.TH>{i}h</Table.TH>
                ))}
              </Table.TR>
            </Table.Head>
            <Table.Body>
              <Table.TR>
                <Table.TH>Hauteur</Table.TH>
                {wave.hourly.wave_height.map((val, i) => (
                  <Table.TD>{val}</Table.TD>
                ))}
              </Table.TR>
              <Table.TR>
                <Table.TH>Direction Vague</Table.TH>
                {wave.hourly.wave_direction.map((val, i) => (
                  <Table.TD>{DirectionArrow(val)}</Table.TD>
                ))}
              </Table.TR>
              <Table.TR>
                <Table.TH>Période</Table.TH>
                {wave.hourly.wave_period.map((val, i) => (
                  <Table.TD>{val}</Table.TD>
                ))}
              </Table.TR>
              <Table.TR>
                <Table.TH>Vitesse Vent</Table.TH>
                {wind.hourly.wind_speed_10m.map((val, i) => (
                  <Table.TD>{val}</Table.TD>
                ))}
              </Table.TR>
              <Table.TR>
                <Table.TH>Direction Vent</Table.TH>
                {wind.hourly.wind_direction_10m.map((val, i) => (
                  <Table.TD>{DirectionArrow(val)}</Table.TD>
                ))}
              </Table.TR>
            </Table.Body>
          </TableSizer>
        </Table>
      </div>
    )
  }
}
const VertTable = styled.div`
  display: none;
  @media (max-width: 554px) {
    display: block;
    height: 50vh;
    border-radius: 16px;
    border: 1px solid #fff;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    width: auto;
    overflow: auto;
  }
`
const TableSizer = styled.div`
  border-radius: 16px;
  border: 1px solid #fff;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  width: max-content;
  max-width: 80vw;
  overflow: auto;
  @media (max-width: 554px) {
    display: none;
  }
`
const TableScroll = styled.div``

export default DayConditions
