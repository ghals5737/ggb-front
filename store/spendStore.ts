import { create } from 'zustand'

interface SpendState {
  bears: number
  increase: (by: number) => void
}

const useSpendStore = create<SpendState>()((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
}))