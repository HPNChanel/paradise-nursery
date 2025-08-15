import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectCartItems, selectCartCount, selectCartTotal } from '../../features/cart/selectors'
import { increment, decrement, remove } from '../../features/cart/cartSlice'
import { Button } from '../../components/Button'
import { formatUSD } from '../../utils/currency'
import type { CartItem } from '../../features/cart/types'
import styles from './CartPage.module.css'

export const CartPage = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const totalItems = useSelector(selectCartCount)
  const totalCost = useSelector(selectCartTotal)

  const handleIncrement = (id: string) => {
    dispatch(increment({ id }))
  }

  const handleDecrement = (id: string) => {
    dispatch(decrement({ id }))
  }

  const handleRemoveItem = (id: string) => {
    dispatch(remove({ id }))
  }

  const handleCheckout = () => {
    alert('Coming Soon')
  }

  if (cartItems.length === 0) {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Your Cart</h1>
        <div className={styles.emptyCart}>
          <div className={styles.emptyIcon}>🛒</div>
          <h3>Your cart is empty</h3>
          <p>Add some beautiful plants to get started!</p>
          <Link to="/products">
            <Button>Shop Plants</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Your Cart</h1>
      
      <div className={styles.cartHeader}>
        <div className={styles.summaryItem}>
          <span className={styles.summaryLabel}>Items:</span>
          <span className={styles.summaryValue}>{totalItems}</span>
        </div>
        <div className={styles.summaryItem}>
          <span className={styles.summaryLabel}>Total:</span>
          <span className={styles.summaryValue}>{formatUSD(totalCost)}</span>
        </div>
      </div>
      
      <div className={styles.cartItems}>
        {cartItems.map((item) => (
          <CartItemRow
            key={item.id}
            item={item}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onRemove={handleRemoveItem}
          />
        ))}
      </div>

      <div className={styles.cartFooter}>
        <Link to="/products">
          <Button variant="secondary">Continue Shopping</Button>
        </Link>
        <Button onClick={handleCheckout}>
          Checkout
        </Button>
      </div>
    </div>
  )
}

interface CartItemRowProps {
  item: CartItem
  onIncrement: (id: string) => void
  onDecrement: (id: string) => void
  onRemove: (id: string) => void
}

const CartItemRow = ({ item, onIncrement, onDecrement, onRemove }: CartItemRowProps) => {
  const itemTotal = item.price * item.qty

  return (
    <div className={styles.cartItem}>
      <img 
        src={item.image} 
        alt={item.name}
        className={styles.itemImage}
        onError={(e) => {
          const target = e.target as HTMLImageElement
          target.src = 'https://picsum.photos/80/80?random=fallback'
        }}
      />
      
      <div className={styles.itemDetails}>
        <h3 className={styles.itemName}>{item.name}</h3>
        <p className={styles.itemPrice}>Unit: {formatUSD(item.price)}</p>
        <p className={styles.itemSubtotal}>Subtotal: {formatUSD(itemTotal)}</p>
      </div>
      
      <div className={styles.quantityControls}>
        <button 
          className={styles.quantityButton}
          onClick={() => onDecrement(item.id)}
          aria-label={`Decrease quantity of ${item.name}`}
        >
          -
        </button>
        <span className={styles.quantity} aria-label={`Quantity: ${item.qty}`}>
          {item.qty}
        </span>
        <button 
          className={styles.quantityButton}
          onClick={() => onIncrement(item.id)}
          aria-label={`Increase quantity of ${item.name}`}
        >
          +
        </button>
      </div>
      
      <button 
        className={styles.deleteButton}
        onClick={() => onRemove(item.id)}
        aria-label={`Remove ${item.name} from cart`}
      >
        Delete
      </button>
    </div>
  )
}

