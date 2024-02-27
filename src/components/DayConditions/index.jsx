import Table from '../Table'
import DirectionArrow from '../../utils/styles/arrow'
import { useFetch } from '../../utils/hooks'
import spotsCoordinate from '../../assets/spotsCoordinate.json'

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
        <Table>
          <Table.Head>
            <Table.TR>
              <Table.TH>Aujourd'hui</Table.TH>
              {wave.hourly.wave_height.map((val, i) => (
                <Table.TD>{i}h</Table.TD>
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
        </Table>
      </div>
    )
  }
}

export default DayConditions
