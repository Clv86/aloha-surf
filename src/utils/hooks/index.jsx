import { useState, useEffect } from 'react'

export function useFetch(url1, url2) {
  const [wave, setWave] = useState()
  const [wind, setWind] = useState()

  useEffect(() => {
    if (!url1 || !url2) return
    async function GetWaveDay() {
      try {
        const response = await fetch(`${url1}`)
        const DayData = await response.json()
        await setWave(DayData)
      } catch (err) {
        console.log(err)
      }
    }
    async function GetWindDay() {
      try {
        const response = await fetch(`${url2}`)
        const DayData = await response.json()
        await setWind(DayData)
      } catch (err) {
        console.log(err)
      }
    }

    GetWaveDay()
    GetWindDay()
  }, [url1, url2])

  return { wave, wind }
}
