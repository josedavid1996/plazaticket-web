import { create } from 'zustand'

type State = {
  isCarrito: boolean
}

type Action = {
  onOpen: () => void
  onClose: () => void
  onToggle: () => void
}

// Create your store, which includes both state and (optionally) actions
export const useCarrito = create<State & Action>((set) => ({
  isCarrito: false,
  onOpen: () => set({ isCarrito: true }),
  onClose: () => set({ isCarrito: false }),
  onToggle: () => set((state) => ({ isCarrito: state.isCarrito ? false : true }))
}))
