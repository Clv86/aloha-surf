function windSpeedColor(speed) {
  if (speed <= 15) {
    return { color: 'green' }
  }
  if (speed > 15 && speed <= 30) {
    return { color: 'orange' }
  } else {
    return { color: 'red' }
  }
}

export default windSpeedColor
