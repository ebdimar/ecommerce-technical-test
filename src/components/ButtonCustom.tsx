interface ButtonProps {
  onClick?: () => void
  disabled?: boolean
  text: string
  className?: string
}

export function ButtonCustom({
  onClick,
  disabled = false,
  className = '',
  text = '',
}: ButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled} className={className}>
      {text}
    </button>
  )
}
