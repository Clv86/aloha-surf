function windAnalysis(wave, wind) {
  console.log(wave)
  console.log(wind)
  let degreesResult = wave >= wind ? wave - wind : wind - wave
  console.log(degreesResult)
  if (degreesResult <= 45 || degreesResult >= 225) {
    let result = 'Onshore'
    return result
  } else if (
    (degreesResult >= 45 && degreesResult <= 90) ||
    (degreesResult >= 225 && degreesResult <= 335)
  ) {
    let result = 'Cross'
    return result
  } else {
    let result = 'Offshore'
    return result
  }
  //  let waveRadians = wave / (180 * Math.PI)
  //let waveX = Math.cos(waveRadians)
  //let waveY = Math.sin(waveRadians)
  //let windRadians = wind / (180 * Math.PI)
  //let windX = Math.cos(windRadians)
  //let windY = Math.sin(windRadians)
  //let vectorResult = [waveX + windX, waveY + windY]
  //let RadiansResult = Math.atan2(vectorResult[0], vectorResult[1])
  //let degreesResult = (180 * RadiansResult) / Math.PI
  //console.log(degreesResult)
  //if (degreesResult <= 45) {
  //let result = 'Onshore'
  //return result
  //} else if (degreesResult >= 46 && degreesResult <= 135) {
  //let result = 'Cross-shore'
  //return result
  //} else {
  //let result = 'Offshore'
  //return result
  //}
}
export default windAnalysis
