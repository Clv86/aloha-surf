function shoreColor(windDirectionAnalysis, wave, wind) {
  let result = windDirectionAnalysis(wave, wind)
  if (result === 'Onshore') {
    return { color: 'red', fill: 'red' }
  } else if (result === 'Offshore') {
    return { color: 'green', fill: 'green' }
  } else {
    return null
  }
}

export default shoreColor
