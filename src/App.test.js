import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  test('should render the title and description', () => {
    render(<App />)

    const header = screen.getByText('Code challenge')
    const description = screen.getByText(/Lorem Ipsum/i)

    expect(header).toBeInTheDocument()
    expect(description).toBeInTheDocument()
  })

  test('should have the products section', () => {
    render(<App />)

    const title = screen.getByText('Products')

    expect(title).toBeInTheDocument()
  })

  test('should see the products section', () => {
    render(<App />)

    const product = screen.getByText('Product 1')
    const image = screen.getByAltText('the description')
    const description = screen.getByText('The product description 1')

    expect(product).toBeInTheDocument()
    expect(image).toBeInTheDocument()
    expect(description).toBeInTheDocument()
  })

  test('should see the products list', () => {
    render(<App />)

    const firstProduct = screen.getByText('Product 1')
    const secondProduct = screen.getByText('Product 2')

    expect(firstProduct).toBeInTheDocument()
    expect(secondProduct).toBeInTheDocument()
  })
})
