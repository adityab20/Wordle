export function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function shuffle(array) {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
}

export function chunk(str, pattern) {
  const matrix = []
  const sum = pattern.reduce((acc, current) => {
    matrix.push([acc, acc + current])
    return acc + current
  }, 0)
  if (sum > str.length) return str
  const res = matrix.map(([start, end]) => str.slice(start, end))
  return res
}

export function roundTo(number, decimal) {
  if (decimal < 0) return NaN
  const multiplier = Math.pow(10, decimal)
  const roundedNumber = Math.floor(number * multiplier) / multiplier
  const res = roundedNumber % 1 === 0 ? Math.round(roundedNumber) : roundedNumber
  return res
}

export function filterArrayByLength(arr, length) {
  return arr.filter((item) => item.length === length)
}

export function fullDataLanguage(languages, langValue) {
  const { value, label } = languages.items.find(({ value }) => value === langValue)
  return { value, label }
}

export function dayOfYear() {
  const now = new Date()
  const newYear = new Date(now.getFullYear(), 0, 0)
  const nowTimeZoneOffset = now.getTimezoneOffset()
  const nyTimeZoneOffset = newYear.getTimezoneOffset()
  const isDST = nowTimeZoneOffset < nyTimeZoneOffset
  if (isDST) newYear.setHours(1)
  const diffDate = now - newYear
  const dayIndex = Math.floor(diffDate / (24 * 60 * 60 * 1000))
  return dayIndex
}

export function getWordByDay(words) {
  const currentIndex = dayOfYear() - 1
  const dailyWord = words[currentIndex]
  return dailyWord
}

export function getRandomWord(words, length) {
  const filtred = filterArrayByLength(words, length)
  const randomIndex = randInt(0, filtred.length - 1)
  const randomWord = filtred[randomIndex]
  return randomWord
}
