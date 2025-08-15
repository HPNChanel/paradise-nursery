export interface Plant {
  id: number
  name: string
  image: string
  price: number
  description: string
  category: string
}

export interface CartItem {
  id: string
  name: string
  price: number
  image: string
  qty: number
}

export interface CartState {
  items: Record<string, CartItem>
}
