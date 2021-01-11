import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  // test('should render the title and description', () => {
  //   render(<App />)

  //   const header = screen.getByText('Code challenge')
  //   const description = screen.getByText('Itaque facere')

  //   expect(header).toBeInTheDocument()
  //   expect(description).toBeInTheDocument()
  // })

  test('should have the products section', () => {
    render(<App />)

    const title = screen.getByText('Products')

    expect(title).toBeInTheDocument()
  })

  // test('should see the product item', () => {
  //   render(<App />)

  //   const product = screen.getByText('Itaque facere fugiat eum.')

  //   expect(product).toBeInTheDocument()
  // })

  test('should see the products list', () => {
    render(<App />)

    const firstProduct = screen.getByAltText('Product 1')
    const secondProduct = screen.getByAltText('Product 2')
    const thirdProduct = screen.getByAltText('Product 3')
    const forthProduct = screen.getByAltText('Product 4')

    expect(firstProduct).toBeInTheDocument()
    expect(secondProduct).toBeInTheDocument()
    expect(thirdProduct).toBeInTheDocument()
    expect(forthProduct).toBeInTheDocument()

  })

  test('should have a contact section', () => {
    render(<App />)

    const form = screen.getByText('Kontakt')

    expect(form).toBeInTheDocument()
  })

  test('should have a input items', () => {
    render(<App />)

    const salutation = screen.getByLabelText('Salutation')
    const firstName = screen.getByLabelText('First Name')
    const lastName = screen.getByLabelText('Last Name')
    const message = screen.getByLabelText('Message')
    const sendInfo = screen.getByLabelText('Send')

    // expect(screen.getByLabelText(‘’First name)).toHaveContent(Sabine)

    expect(salutation).toBeInTheDocument()
    expect(firstName).toBeInTheDocument()
    expect(lastName).toBeInTheDocument()
    expect(message).toBeInTheDocument()
    expect(sendInfo).toBeInTheDocument()
  })

})
