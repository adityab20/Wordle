import { createWithEqualityFn as create } from 'zustand/traditional'
import { shallow } from 'zustand/shallow'
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { useBoardStore } from '.'

const init = {
  activeIndex: 0,
  count: 5,
  correctWord: [],
  absentLetters: []
}

const useHintsStore = create(
  devtools(
    persist(
      immer((set) => ({
        daily: init,
        unlimited: init,

        resetHints({ mode }) {
          set((state) => {
            state[mode] = { ...init, count: state[mode].count }
          })
        },

        setActiveIndex(i) {
          set((state) => {
            const mode = useBoardStore.getState().mode
            state[mode].activeIndex = i
          })
        },

        addCorrectLetter({ letter, i }) {
          set((state) => {
            const mode = useBoardStore.getState().mode
            state[mode].correctWord[i] = { letter, status: 'correct' }
            state[mode].count -= 1
          })
        },

        addAbsentLetter(letter) {
          set((state) => {
            const mode = useBoardStore.getState().mode
            state[mode].absentLetters.push({ letter, status: 'absent' })
            state[mode].count -= 1
          })
        },

        incHints() {
          set((state) => {
            const mode = useBoardStore.getState().mode
            state[mode].count += 1
          })
        }
      })),
      {
        name: `${import.meta.env.VITE_LOCAL_STORAGE_KEY}:hints`
      }
    ),
    {
      name: 'Zustand Store',
      store: 'hints'
    }
  ),
  shallow
)

export default useHintsStore
