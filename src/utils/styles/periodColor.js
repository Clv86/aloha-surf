function periodColor(period) {
  if (period >= 8 && period <= 13) {
    return { color: 'green' }
  } else {
    return { color: 'orange' }
  }
}

export default periodColor
