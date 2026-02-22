import styles from '@/styles/components/ButtonCustom.module.css'

interface ButtonProps {
  onClick?: () => void
  disabled?: boolean
  text: string
  className?: string
  variant?: 'black' | 'white'
}

export function ButtonCustom({
  onClick,
  disabled = false,
  className = '',
  text = '',
  variant = 'black',
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${styles.buttonCustom} ${variant === 'white' ? styles.white : ''} ${className}`.trim()}
    >
      {text}
    </button>
  )
}
