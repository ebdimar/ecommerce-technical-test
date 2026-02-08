import { render, screen } from '@testing-library/react'
import HomePage from './page'

describe('HomePage', () => {
  it('renders a heading', () => {
    render(<HomePage />)

    const heading = screen.getByRole('heading', { level: 1, name: /First Page/ })

    expect(heading).toBeInTheDocument
  })
})
