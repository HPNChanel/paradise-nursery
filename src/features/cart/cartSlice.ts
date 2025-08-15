import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  qty: number;
}

interface CartState {
  items: Record<string, CartItem>;
}

const initialState: CartState = {
  items: {},
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<{ id: string; name: string; price: number; image: string }>) => {
      const { id, name, price, image } = action.payload
      if (!state.items[id]) {
        state.items[id] = { id, name, price, image, qty: 1 }
      }
      // If item exists, ignore (don't increment)
    },
    increment: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload
      if (state.items[id]) {
        state.items[id].qty += 1
      }
    },
    decrement: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload
      if (state.items[id]) {
        if (state.items[id].qty > 1) {
          state.items[id].qty -= 1
        } else {
          delete state.items[id]
        }
      }
    },
    remove: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload
      delete state.items[id]
    },
  },
})

export const { addItem, increment, decrement, remove } = cartSlice.actions
export default cartSlice.reducer
