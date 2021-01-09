import React from 'react'

import { Product } from '../product'

import background from './assets/background.jpg'
import './Products.css'

const products = [
  {
    title: 'Product 1',
    description: 'The product description 1',
    image: background,
  },
  {
    title: 'Product 2',
    description: 'The product description 2',
    image: background,
  }
]

const Products = () => {
  return (
    <div className="products">
      <h3>Products</h3>
      {
        products.map((product, index) => (
          <Product
            key={index}
            title={product.title}
            description={product.description}
            image={product.image}
          />
        ))
      }
    </div>
  )
}

export { Products }
