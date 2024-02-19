import { useFetch } from '../../utils/hooks'
import DirectionArrow from '../../utils/styles/arrow'
import spotsCoordinate from '../../assets/spotsCoordinate.json'
import Table from '../Table'

function HourConditions(spotName) {
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
    `https://api.open-meteo.com/v1/forecast?latitude=${location[0][1][0]}&longitude=${location[0][1][1]}&hourly=wind_speed_10m,wind_direction_10m&timezone=Europe%2FBerlin`,
  )

  const date = new Date()
  const hour = date.getHours()

  if (wind && wave) {
    return (
      <div>
        <Table>
          <Table.Body>
            <Table.TD>{wave.hourly.wave_height[hour]}</Table.TD>
            <Table.TD>
              {DirectionArrow(wave.hourly.wave_direction[hour])}
            </Table.TD>
            <Table.TD>{wave.hourly.wave_period[hour]}</Table.TD>
            <Table.TD>{wind.hourly.wind_speed_10m[hour]}</Table.TD>
            <Table.TD>
              {DirectionArrow(wave.hourly.wave_direction[hour])}
            </Table.TD>
          </Table.Body>
        </Table>
      </div>
    )
  }
}
export default HourConditions
