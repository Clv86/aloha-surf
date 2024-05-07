import { useFetch } from '../../utils/hooks/dataFetching'
import spotsCoordinate from '../../assets/spotsCoordinate.json'
import styled from 'styled-components'
import windAnalysis from '../../utils/windAnalysis'

function HourConditions(props) {
  const name = props.spotName
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
      <Container>
        <LiveConditionTitle>Hauteur (m)</LiveConditionTitle>
        <LiveConditionTitle>Période (s)</LiveConditionTitle>
        <LiveConditionTitle>Vitesse (km/h)</LiveConditionTitle>
        <LiveConditionTitle>Direction</LiveConditionTitle>
        <LiveCondition>{wave.hourly.wave_height[hour]}</LiveCondition>
        <LiveCondition>{wave.hourly.wave_period[hour]}</LiveCondition>
        <LiveCondition>{wind.hourly.wind_speed_10m[hour]}</LiveCondition>
        <LiveCondition>
          {windAnalysis(
            wave.hourly.wave_direction[hour],
            wind.hourly.wind_direction_10m[hour],
          )}
        </LiveCondition>
      </Container>
    )
  }
}
const LiveConditionTitle = styled.div`
  font-weight: 700;
`
const Container = styled.div`
  display: grid;
  margin: 8px;
  grid-template-columns: repeat(4, 1fr);
  gap: 4px;
  font-size: 0.5em;
  color: #3c3c3c;
`
const LiveCondition = styled.div``
export default HourConditions
