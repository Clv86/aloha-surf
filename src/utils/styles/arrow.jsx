function DirectionArrow(value) {
  let arrow = ''
  if (value < 20 || (value >= 350 && value <= 360)) {
    return (arrow = String.fromCharCode(8593))
  } else if (value >= 20 && value < 39) {
    return (arrow = String.fromCharCode(8593, 8599))
  } else if (value >= 40 && value < 59) {
    return (arrow = String.fromCharCode(8599))
  } else if (value >= 60 && value < 79) {
    return (arrow = String.fromCharCode(8599, 8594))
  } else if (value >= 80 && value <= 109) {
    return (arrow = String.fromCharCode(8594))
  } else if (value >= 110 && value <= 129) {
    return (arrow = String.fromCharCode(8594, 8600))
  } else if (value >= 130 && value <= 149) {
    return (arrow = String.fromCharCode(8600))
  } else if (value >= 150 && value <= 169) {
    return (arrow = String.fromCharCode(8600, 8595))
  } else if (value >= 170 && value <= 199) {
    return (arrow = String.fromCharCode(8595))
  } else if (value >= 200 && value <= 219) {
    return (arrow = String.fromCharCode(8595, 8601))
  } else if (value >= 220 && value <= 239) {
    return (arrow = String.fromCharCode(8601))
  } else if (value >= 240 && value <= 259) {
    return (arrow = String.fromCharCode(8601, 8592))
  } else if (value >= 260 && value <= 289) {
    return (arrow = String.fromCharCode(8592))
  } else if (value >= 290 && value <= 309) {
    return (arrow = String.fromCharCode(8592, 8598))
  } else if (value >= 310 && value <= 329) {
    return (arrow = String.fromCharCode(8598))
  } else if (value >= 330 && value <= 349) {
    return (arrow = String.fromCharCode(8598, 8593))
  }
  return arrow
}

export default DirectionArrow
