import classNames from 'classnames'
import { useKeyboard } from 'src/hooks'
import { languages } from 'src/locales'
import { useBoardStore, useHintsStore, useSettingsStore } from 'src/store'
import { Button } from './'

function KeyButton({ letter }) {
  const mode = useBoardStore((state) => state.mode)
  const { letters, boardSize, row, gameover } = useBoardStore((state) => state[mode])
  const absentLetters = useHintsStore((state) => state[mode].absentLetters)
  const addLetter = useBoardStore((state) => state.addLetter)
  const language = useSettingsStore((state) => state.language)
  const boardRowIsFull = letters.length === row * boardSize
  const isDisabled = gameover || boardRowIsFull
  const detectKeys = languages.alpha(language.value).split('')

  useKeyboard((pressedKey) => !isDisabled && addLetter(pressedKey), { detectKeys })

  function checkLetterStatus(letter) {
    const check = (state) =>
      [...letters, ...absentLetters].find((item) => item.letter === letter && item.status === state)
    const res = check('correct') || check('present') || check('absent') || check('unknown')
    return res
  }

  return (
    <Button
      disabled={isDisabled}
      onClick={() => addLetter(letter)}
      className={classNames('keyboard-button', checkLetterStatus(letter)?.status)}
    >
      {letter}
    </Button>
  )
}

export default KeyButton
