import { create } from 'zustand'
import { AuthenticatedStore, useAuthenticated } from './authenticated'

export const useStore = create<AuthenticatedStore>()((...a) => ({
  ...useAuthenticated(...a)
}))
