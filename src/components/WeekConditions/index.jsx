import Table from '../Table'
import DirectionArrow from '../../utils/styles/arrow'
import { useFetch } from '../../utils/hooks'
import spotsCoordinate from '../../assets/spotsCoordinate.json'

function WeekConditions(spotName) {
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
    `https://marine-api.open-meteo.com/v1/marine?latitude=${location[0][1][0]}&longitude=${location[0][1][1]}&daily=wave_height_max,wave_direction_dominant,wave_period_max&timezone=Europe%2FLondon`,
    `https://api.open-meteo.com/v1/forecast?latitude=${location[0][1][0]}&longitude=${location[0][1][1]}&daily=wind_speed_10m_max,wind_direction_10m_dominant&timezone=Europe%2FLondon`,
  )

  if (wind && wave) {
    return (
      <div>
        <Table>
          <Table.Head>
            <Table.TR>
              <Table.TH>Cette semaine</Table.TH>
              {wave.daily.wave_height_max.map((val, i) => (
                <Table.TH>{i}</Table.TH>
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
        </Table>
      </div>
    )
  }
}

export default WeekConditions
