import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { ProductListingPage } from './ProductListingPage'
import cartReducer from '../../features/cart/cartSlice'

// Mock the plants data
vi.mock('../../data/plants', () => ({
  plants: [
    {
      id: 1,
      name: 'Test Plant',
      price: 25,
      category: 'Test Category',
      image: 'https://example.com/test.jpg',
      description: 'A test plant',
      stock: 10
    }
  ],
  getCategories: () => ['Test Category']
}))

// Mock react-router-dom
vi.mock('react-router-dom', () => ({
  useSearchParams: () => [new URLSearchParams(), vi.fn()]
}))

const createTestStore = (initialState = {}) => {
  return configureStore({
    reducer: {
      cart: cartReducer
    },
    preloadedState: {
      cart: { items: {} },
      ...initialState
    }
  })
}

const renderWithProvider = (store = createTestStore()) => {
  return render(
    <Provider store={store}>
      <ProductListingPage />
    </Provider>
  )
}

describe('ProductCard', () => {
  test('should disable button and change label after adding to cart', () => {
    const store = createTestStore()
    renderWithProvider(store)
    
    const addButton = screen.getByRole('button', { name: /add to cart/i })
    
    // Initially button should be enabled with "Add to Cart" text
    expect(addButton).not.toBeDisabled()
    expect(addButton).toHaveTextContent('Add to Cart')
    
    // Click to add item to cart
    fireEvent.click(addButton)
    
    // After adding, button should be disabled with "Added" text
    expect(addButton).toBeDisabled()
    expect(addButton).toHaveTextContent('Added')
    expect(addButton).toHaveAttribute('title', 'Already in cart')
    
    // Check that "In cart" indicator is shown
    expect(screen.getByText('✓ In cart')).toBeInTheDocument()
  })

  test('should increase cart count when adding item', () => {
    const store = createTestStore()
    renderWithProvider(store)
    
    const addButton = screen.getByRole('button', { name: /add to cart/i })
    
    // Initially cart should be empty
    expect(store.getState().cart.items).toEqual({})
    
    // Add item to cart
    fireEvent.click(addButton)
    
    // Cart should now contain the item
    const cartState = store.getState().cart.items
    expect(Object.keys(cartState)).toHaveLength(1)
    expect(cartState['1']).toEqual({
      id: '1',
      name: 'Test Plant',
      price: 25,
      image: 'https://example.com/test.jpg',
      qty: 1
    })
  })

  test('should not add duplicate items when clicking multiple times', () => {
    const store = createTestStore()
    renderWithProvider(store)
    
    const addButton = screen.getByRole('button', { name: /add to cart/i })
    
    // Click button multiple times
    fireEvent.click(addButton)
    fireEvent.click(addButton)
    fireEvent.click(addButton)
    
    // Should still only have one item with qty: 1
    const cartState = store.getState().cart.items
    expect(Object.keys(cartState)).toHaveLength(1)
    expect(cartState['1'].qty).toBe(1)
  })
})
