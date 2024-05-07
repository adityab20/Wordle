import { useState, useEffect } from 'react'
import { useGameLogic } from 'src/hooks'

const midnight = '00:00:00'

function useMidnightTimer() {
  const [timer, setTimer] = useState(timeToMidnight())
  const { newGame } = useGameLogic()

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(timeToMidnight())
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  useEffect(() => {
    if (timer === midnight) {
      newGame({ newDay: true })
    }
    // eslint-disable-next-line
  }, [timer])

  function timeToMidnight() {
    const now = new Date()
    const midnight = new Date().setHours(24, 0, 0, 0)
    const timeRemaining = new Date(midnight - now)
    const hours = timeRemaining.getUTCHours().toString().padStart(2, '0')
    const minutes = timeRemaining.getUTCMinutes().toString().padStart(2, '0')
    const seconds = timeRemaining.getUTCSeconds().toString().padStart(2, '0')
    return `${hours}:${minutes}:${seconds}`
  }

  return timer
}

export default useMidnightTimer
