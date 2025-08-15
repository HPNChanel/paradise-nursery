import type { RootState } from '../../app/store'

export const selectCartItems = (state: RootState) => Object.values(state.cart.items)

export const selectCartCount = (state: RootState) => 
  Object.values(state.cart.items).reduce((total, item) => total + item.qty, 0)

export const selectCartTotal = (state: RootState) => 
  Object.values(state.cart.items).reduce((total, item) => total + (item.price * item.qty), 0)

export const selectIsInCart = (state: RootState, id: string) => 
  Boolean(state.cart.items[id])
