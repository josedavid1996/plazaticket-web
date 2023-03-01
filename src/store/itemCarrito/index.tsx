import { create } from 'zustand'

type ItemCarrito = {
  tendido: string
  fila: string
  asiento: string | number
}

type Action = {
  addCarrito: (item: ItemCarrito) => void
  removeCarrito: (item: ItemCarrito) => void
  carrito: ItemCarrito[]
}

// Create your store, which includes both state and (optionally) actions
export const useItemCarrito = create<Action>((set) => ({
  carrito: [],
  addCarrito: (item: ItemCarrito) => {
    set((prev) => ({ carrito: [...prev.carrito, item] }))
  },
  removeCarrito: (item: ItemCarrito) => {
    set((prev) => ({ carrito: prev.carrito.filter((car) => item.asiento !== car.asiento) }))
  }
}))
