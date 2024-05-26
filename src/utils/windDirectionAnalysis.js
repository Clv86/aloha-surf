function windDirectionAnalysis(wave, wind) {
  let degreesResult = wave >= wind ? wave - wind : wind - wave
  if (degreesResult <= 45 || degreesResult >= 335) {
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
}
export default windDirectionAnalysis
