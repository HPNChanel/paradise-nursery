import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { Header } from './components/Header'
import { LandingPage } from './pages/LandingPage'
import { ProductListingPage } from './pages/ProductListingPage'
import { CartPage } from './pages/CartPage'
import './App.css'

const AppContent = () => {
  const location = useLocation()
  const showHeader = location.pathname === '/products' || location.pathname === '/cart'

  return (
    <div className="app">
      {showHeader && <Header />}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductListingPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
    </div>
  )
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppContent />
      </Router>
    </Provider>
  )
}

export default App
