import { IonIcon } from '@ionic/react'
import { checkmarkOutline } from 'ionicons/icons'
import { useKeyboard } from 'src/hooks'
import { useBoardStore, useStatisticsStore, useModalsStore, useSettingsStore, useHintsStore } from 'src/store'
import dictionary from 'src/dictionary'
import { Button } from './'

function SubmitButton() {
  const { letters, boardSize, row, answer } = useBoardStore((state) => state[state.mode])
  const [addWord, setGameOver] = useBoardStore((state) => [state.addWord, state.setGameOver])
  const [setWin, setDefeat] = useStatisticsStore((state) => [state.win, state.defeat])
  const incHints = useHintsStore((state) => state.incHints)
  const language = useSettingsStore((state) => state.language)
  const wordcheck = useSettingsStore((state) => state.wordcheck)
  const showModal = useModalsStore((state) => state.showModal)
  const isDisabled = letters.length !== row * boardSize
  const detectKeys = [13]

  useKeyboard(() => !isDisabled && submitWord(), { detectKeys })

  function getCurrentWord() {
    const current = letters
      .map(({ letter }) => letter)
      .slice(-boardSize)
      .join('')
    return current
  }

  function checkWordNotExist(currentWord) {
    if (!dictionary[language.value].find((word) => word === currentWord)) {
      showModal('wordnotfound')
      return true
    }
  }

  function compareWords(currentWord) {
    const res = []
    for (let i = 0; i < currentWord.length; i++) {
      const letter = currentWord[i]
      const status = letter === answer[i] ? 'correct' : 'absent'
      res.push({ letter, status })
    }
    for (let i = 0; i < currentWord.length; i++) {
      const letter = currentWord[i]
      const max = answer.split('').filter((ltr) => ltr === letter).length
      const now = res.filter(({ letter: ltr, status }) => {
        return letter === ltr && (status === 'correct' || status === 'present')
      }).length
      if (answer.includes(letter) && letter !== answer[i] && now < max) {
        res[i] = { letter, status: 'present' }
      }
    }
    return res
  }

  function checkGameOver(currentWord) {
    if (currentWord === answer) {
      showModal('win')
      setWin(row)
      setGameOver()
      incHints()
    } else if (row === 6) {
      showModal('defeat')
      setDefeat()
      setGameOver()
    }
  }

  function submitWord() {
    const currentWord = getCurrentWord()
    const wordNotFound = wordcheck && checkWordNotExist(currentWord)
    if (wordNotFound) return
    const compared = compareWords(currentWord)
    addWord(compared)
    checkGameOver(currentWord)
  }

  return (
    <Button className="keyboard-button submit-btn" disabled={isDisabled} onClick={submitWord}>
      <IonIcon icon={checkmarkOutline} />
    </Button>
  )
}

export default SubmitButton
