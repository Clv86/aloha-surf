function createKeyGenerator() {
  const counts = new Map()
  return (key) => {
    const newCount = (counts.get(key) ?? 0) + 1
    counts.set(key, newCount)
    return `${key}-${newCount}`
  }
}

export default createKeyGenerator
