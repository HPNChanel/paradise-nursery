import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import styles from './LandingPage.module.css'

export const LandingPage = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.companyName}>Paradise Nursery</h1>
          <p className={styles.brandParagraph}>
            Transform your space into a lush paradise with our carefully curated collection of premium plants. 
            From air-purifying houseplants to pet-friendly favorites, we bring nature's beauty directly to your doorstep 
            with expert care guidance and sustainable growing practices.
          </p>
          <Link to="/products" className={styles.ctaLink}>
            <Button size="medium">Get Started</Button>
          </Link>
        </div>
      </section>

      <section className={styles.features}>
        <h2 className={styles.featuresTitle}>Why Choose Paradise Nursery?</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>🌱</div>
            <h3 className={styles.featureTitle}>Premium Quality</h3>
            <p className={styles.featureDescription}>
              Hand-picked, healthy plants delivered straight to your door. 
              Each plant is carefully inspected for quality and health.
            </p>
          </div>
          
          <div className={styles.feature}>
            <div className={styles.featureIcon}>🚚</div>
            <h3 className={styles.featureTitle}>Fast Delivery</h3>
            <p className={styles.featureDescription}>
              Quick and safe delivery with special plant packaging. 
              Your plants arrive fresh and ready to thrive.
            </p>
          </div>
          
          <div className={styles.feature}>
            <div className={styles.featureIcon}>💡</div>
            <h3 className={styles.featureTitle}>Expert Care Tips</h3>
            <p className={styles.featureDescription}>
              Get detailed care instructions with every plant. 
              Our experts are here to help your plants flourish.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
