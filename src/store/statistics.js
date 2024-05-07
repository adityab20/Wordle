import { createWithEqualityFn as create } from 'zustand/traditional'
import { shallow } from 'zustand/shallow'
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { useBoardStore } from './'

const init = {
  played: 0,
  wins: 0,
  defeat: 0,
  winRate: 0,
  currentStreak: 0,
  maxStreak: 0,
  dist: [0, 0, 0, 0, 0, 0]
}

const useStatisticsStore = create(
  devtools(
    persist(
      immer((set, get) => ({
        daily: init,
        unlimited: init,

        resetStats({ mode }) {
          set((state) => {
            state[mode] = init
          })
        },

        win(row) {
          set((state) => {
            const mode = useBoardStore.getState().mode
            const area = state[mode]
            area.wins += 1
            area.played += 1
            area.winRate = (area.wins / area.played) * 100
            area.currentStreak += 1
            area.maxStreak = Math.max(area.currentStreak, area.maxStreak)
            area.dist[row - 1] += 1
          })
        },

        defeat() {
          set((state) => {
            const mode = useBoardStore.getState().mode
            const area = state[mode]
            area.defeat += 1
            area.played += 1
            area.winRate = (area.wins / area.played) * 100
            area.currentStreak = 0
            area.maxStreak = Math.max(area.currentStreak, area.maxStreak)
          })
        },

        bestTry() {
          const mode = useBoardStore.getState().mode
          const dist = get()[mode].dist
          const best = dist.findIndex((item) => item === Math.max(...dist) && item !== 0) + 1
          return best
        }
      })),
      {
        name: `${import.meta.env.VITE_LOCAL_STORAGE_KEY}:statistics`
      }
    ),
    {
      name: 'Zustand Store',
      store: 'statistics'
    }
  ),
  shallow
)

export default useStatisticsStore
