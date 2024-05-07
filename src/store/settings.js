import { createWithEqualityFn as create } from 'zustand/traditional'
import { shallow } from 'zustand/shallow'
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

const useSettingsStore = create(
  devtools(
    persist(
      immer((set) => ({
        wordcheck: true,
        swapButtons: false,
        theme: window?.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light',
        language: {
          value: import.meta.env.VITE_DEFAULT_LANGUAGE_VALUE,
          label: import.meta.env.VITE_DEFAULT_LANGUAGE_LABEL
        },

        toggleWordcheck() {
          set((state) => {
            state.wordcheck = !state.wordcheck
          })
        },

        toggleSwapButtons() {
          set((state) => {
            state.swapButtons = !state.swapButtons
          })
        },

        setTheme(theme) {
          set((state) => {
            state.theme = theme
          })
        },

        setLanguage(language) {
          set((state) => {
            state.language = language
          })
        }
      })),
      { name: `${import.meta.env.VITE_LOCAL_STORAGE_KEY}:settings` }
    ),
    {
      name: 'Zustand Store',
      store: 'settings'
    }
  ),
  shallow
)

export default useSettingsStore
