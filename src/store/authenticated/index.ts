import create, { StateCreator } from 'zustand'

export interface AuthenticatedStore {
  isAuthenticated: boolean
  onOpen: () => void
  onClose: () => void
  onToggle: () => void
}

export const useAuthenticated: StateCreator<AuthenticatedStore, [], []> = (set) => ({
  isAuthenticated: false,
  onOpen: () => set({ isAuthenticated: true }),
  onClose: () => set({ isAuthenticated: false }),
  onToggle: () => set((state) => ({ isAuthenticated: state.isAuthenticated ? false : true }))
})
