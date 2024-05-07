import { createWithEqualityFn as create } from 'zustand/traditional'
import { shallow } from 'zustand/shallow'
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { dayOfYear, getWordByDay, getRandomWord } from 'src/utils'
import dictionary from 'src/dictionary'
import { useSettingsStore } from '.'

const init = {
  letters: [],
  boardSize: 5,
  row: 1,
  answer: null,
  gameover: false,
  daystamp: 0
}

const useBoardStore = create(
  devtools(
    persist(
      immer((set) => ({
        tries: 6,
        mode: 'daily',
        daily: init,
        unlimited: init,

        setGameMode(mode) {
          set((state) => {
            state.mode = mode
          })
        },

        setAnswer({ mode, challenge }) {
          set((state) => {
            const langValue = useSettingsStore.getState().language.value
            const words = dictionary[langValue]
            const answer = {
              daily: getWordByDay(words),
              unlimited: challenge ?? getRandomWord(words, state.unlimited.boardSize)
            }
            state[mode].boardSize = answer[mode].length
            state[mode].answer = answer[mode]
            state[mode].gameover = false
            state[mode].daystamp = dayOfYear()
          })
        },

        setBoardSize(size) {
          set((state) => {
            state[state.mode].boardSize = size
          })
        },

        addLetter(letter) {
          set((state) => {
            state[state.mode].letters.push({ letter, status: 'unknown' })
          })
        },

        backspace() {
          set((state) => {
            state[state.mode].letters.pop()
          })
        },

        addWord(word) {
          set((state) => {
            state[state.mode].letters = [...state[state.mode].letters.slice(0, -state[state.mode].boardSize), ...word]
            state[state.mode].row += 1
          })
        },

        setGameOver() {
          set((state) => {
            state[state.mode].gameover = true
          })
        },

        clearBoard({ mode }) {
          set((state) => {
            state[mode].letters = []
            state[mode].row = 1
          })
        }
      })),
      {
        name: `${import.meta.env.VITE_LOCAL_STORAGE_KEY}:board`
      }
    ),
    {
      name: 'Zustand Store',
      store: 'board'
    }
  ),
  shallow
)

export default useBoardStore
