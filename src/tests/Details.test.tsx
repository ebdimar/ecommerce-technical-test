import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Details } from '@/app/items/[id]/_components/Details'
import { useCartStore } from '@/store/cartStore'

const mockItem = {
  id: '1',
  brand: 'Apple',
  name: 'iPhone 15',
  description: 'Test description',
  basePrice: 999,
  rating: 4.5,
  specs: {},
  colorOptions: [
    { name: 'Black', hexCode: '#000000', imageUrl: 'black.jpg' },
    { name: 'White', hexCode: '#ffffff', imageUrl: 'white.jpg' },
  ],
  storageOptions: [
    { capacity: '128GB', price: 999 },
    { capacity: '256GB', price: 1099 },
  ],
  similarProducts: [],
}

beforeEach(() => {
  useCartStore.setState({ items: [] })
})

describe('Details', () => {
  it('should render product name and base price', () => {
    render(<Details item={mockItem} />)
    expect(screen.getByText('iPhone 15')).toBeInTheDocument()
    expect(screen.getByText(/999/)).toBeInTheDocument()
  })

  it('should have add to cart button disabled if no color and capacity selected', () => {
    render(<Details item={mockItem} />)
    expect(screen.getByRole('button', { name: /añadir/i })).toBeDisabled()
  })

  it('should enable button when color and capacity are selected', async () => {
    render(<Details item={mockItem} />)
    const user = userEvent.setup()

    await user.click(screen.getByRole('radio', { name: /black/i }))
    await user.click(screen.getByRole('radio', { name: /128gb/i }))

    expect(screen.getByRole('button', { name: /añadir/i })).not.toBeDisabled()
  })

  it('should add item to cart when button is clicked', async () => {
    render(<Details item={mockItem} />)
    const user = userEvent.setup()

    await user.click(screen.getByRole('radio', { name: /black/i }))
    await user.click(screen.getByRole('radio', { name: /128gb/i }))
    await user.click(screen.getByRole('button', { name: /añadir/i }))

    expect(useCartStore.getState().items).toHaveLength(1)
    expect(useCartStore.getState().items[0].color).toBe('Black')
  })
})
