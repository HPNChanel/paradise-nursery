import { useState, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { plants, getCategories } from '../../data/plants'
import { addItem } from '../../features/cart/cartSlice'
import { selectIsInCart } from '../../features/cart/selectors'
import { Button } from '../../components/Button'
import { formatUSD } from '../../utils/currency'
import type { RootState } from '../../app/store'
import type { Plant } from '../../data/plants'
import styles from './ProductListingPage.module.css'

export const ProductListingPage = () => {
  const dispatch = useDispatch()
  const [searchParams, setSearchParams] = useSearchParams()
  const [isLoading, setIsLoading] = useState(true)
  
  const selectedCategory = searchParams.get('category') || 'All'
  const categories = useMemo(() => ['All', ...getCategories(plants)], [])

  const filteredPlants = useMemo(() => {
    if (selectedCategory === 'All') {
      return plants
    }
    return plants.filter(plant => plant.category === selectedCategory)
  }, [selectedCategory])

  const handleCategoryChange = (category: string) => {
    if (category === 'All') {
      setSearchParams({})
    } else {
      setSearchParams({ category })
    }
  }

  const handleAddToCart = (plant: Plant) => {
    dispatch(addItem({
      id: plant.id.toString(),
      name: plant.name,
      price: plant.price,
      image: plant.image
    }))
  }

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 500)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingSkeleton />
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Plant Collection</h1>
      
      <div className={styles.categoryFilter}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.categoryChip} ${selectedCategory === category ? styles.active : ''}`}
            onClick={() => handleCategoryChange(category)}
            aria-pressed={selectedCategory === category}
          >
            {category}
          </button>
        ))}
      </div>
      
      {filteredPlants.length === 0 ? (
        <div className={styles.emptyState}>
          <h3>No plants found</h3>
          <p>Try selecting a different category or check back later!</p>
        </div>
      ) : (
        <div className={styles.grid}>
          {filteredPlants.map((plant) => (
            <ProductCard
              key={plant.id}
              plant={plant}
              onAddToCart={() => handleAddToCart(plant)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

interface ProductCardProps {
  plant: Plant
  onAddToCart: () => void
}

const ProductCard = ({ plant, onAddToCart }: ProductCardProps) => {
  const inCart = useSelector((state: RootState) => selectIsInCart(state, plant.id.toString()))

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img 
          src={plant.image} 
          alt={plant.name}
          className={styles.image}
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = 'https://picsum.photos/300/200?random=fallback'
          }}
        />
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.name}>{plant.name}</h3>
        <p className={styles.price}>{formatUSD(plant.price)}</p>
        <span className={styles.category}>{plant.category}</span>
        <p className={styles.description}>{plant.description}</p>
        
        <div className={styles.addToCartSection}>
          <Button 
            onClick={onAddToCart} 
            disabled={inCart}
            aria-disabled={inCart}
            title={inCart ? "Already in cart" : "Add to cart"}
          >
            {inCart ? 'Added' : 'Add to Cart'}
          </Button>
          {inCart && (
            <span className={styles.quantityInfo}>
              ✓ In cart
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

const LoadingSkeleton = () => {
  return (
    <div className={styles.container}>
      <div className={styles.skeletonTitle}></div>
      
      <div className={styles.categoryFilter}>
        {Array.from({ length: 5 }, (_, i) => (
          <div key={i} className={styles.skeletonChip}></div>
        ))}
      </div>
      
      <div className={styles.grid}>
        {Array.from({ length: 8 }, (_, i) => (
          <div key={i} className={styles.skeletonCard}>
            <div className={styles.skeletonImage}></div>
            <div className={styles.skeletonContent}>
              <div className={styles.skeletonText}></div>
              <div className={styles.skeletonText}></div>
              <div className={styles.skeletonButton}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
