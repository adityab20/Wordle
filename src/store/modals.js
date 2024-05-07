import { createWithEqualityFn as create } from 'zustand/traditional'
import { shallow } from 'zustand/shallow'
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

const useModalsStore = create(
  devtools(
    persist(
      immer((set) => ({
        settings: false,
        tutorial: true,
        win: false,
        defeat: false,
        wordnotfound: false,
        nextgame: false,

        showModal(name) {
          set((state) => {
            state[name] = true
          })
        },

        hideModal(name) {
          set((state) => {
            state[name] = false
          })
        }
      })),
      {
        name: `${import.meta.env.VITE_LOCAL_STORAGE_KEY}:modals`,
        partialize: (state) => ({ tutorial: state.tutorial })
      }
    ),
    {
      name: 'Zustand Store',
      store: 'modals'
    }
  ),
  shallow
)

export default useModalsStore
