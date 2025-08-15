import '@testing-library/jest-dom/vitest'

// Mock window.alert for tests
Object.defineProperty(window, 'alert', {
  value: () => {},
})
