import i18n from 'i18next'
import { useQuery, useSimpleCrypto } from 'src/hooks'
import { dayOfYear, fullDataLanguage } from 'src/utils'
import { useModalsStore, useBoardStore, useHintsStore, useSettingsStore } from 'src/store'
import { languages } from 'src/locales'

function useGameLogic() {
  const query = useQuery()
  const { decrypt } = useSimpleCrypto()
  const daily = useBoardStore((state) => state.daily)
  const unlimited = useBoardStore((state) => state.unlimited)
  const setAnswer = useBoardStore((state) => state.setAnswer)
  const setGameMode = useBoardStore((state) => state.setGameMode)
  const clearBoard = useBoardStore((state) => state.clearBoard)
  const resetHints = useHintsStore((state) => state.resetHints)
  const [win, defeat] = useModalsStore((state) => [state.win, state.defeat])
  const hideModal = useModalsStore((state) => state.hideModal)
  const setLanguage = useSettingsStore((state) => state.setLanguage)

  function newDailyGame(instantly, newDay) {
    const isNextDay = dayOfYear() !== daily.daystamp
    if (isNextDay || !daily.answer || (instantly && !daily.gameover) || newDay) {
      clearBoard({ mode: 'daily' })
      setAnswer({ mode: 'daily' })
      resetHints({ mode: 'daily' })
    }
  }

  function newUnlimitedGame(challenge, instantly) {
    if (unlimited.gameover || !unlimited.answer || challenge || instantly) {
      clearBoard({ mode: 'unlimited' })
      setAnswer({ mode: 'unlimited', challenge })
      resetHints({ mode: 'unlimited' })
    }
  }

  function newGame({ challenge, newBoardSize, newLanguage, newDay } = {}) {
    win && hideModal('win')
    defeat && hideModal('defeat')

    const waitFn = () => {
      if (!win && !defeat) {
        clearInterval(intervalId)
        newDailyGame(newLanguage, newDay)
        newUnlimitedGame(challenge, newBoardSize || newLanguage)
      }
    }

    const intervalId = setInterval(waitFn, 100)
  }

  function challengeGame() {
    const data = query.get('challenge')
    const langValue = query.get('lang')
    if (data && langValue) {
      const challenge = decrypt(data)
      const { value, label } = fullDataLanguage(languages, langValue)
      i18n.changeLanguage(value)
      setLanguage({ value, label })
      setGameMode('unlimited')
      newGame({ challenge, newLanguage: true })
    }
  }

  return { newGame, challengeGame }
}

export default useGameLogic
