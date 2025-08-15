import type { ReactNode, ButtonHTMLAttributes } from 'react'
import styles from './Button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'small' | 'medium'
  children: ReactNode
}

export const Button = ({ 
  variant = 'primary', 
  size = 'medium', 
  children, 
  className = '', 
  ...props 
}: ButtonProps) => {
  const buttonClasses = [
    styles.button,
    styles[variant],
    size === 'small' ? styles.small : '',
    className
  ].filter(Boolean).join(' ')

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  )
}
