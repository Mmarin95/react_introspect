import React from 'react'

import { Product } from '../product'

import background from './assets/background.jpg'
import './Products.css'

const products = [
  {
    title: 'Itaque facere fugiat eum.',
    description: 'Itaque facere fugiat eum. Tempora eum molestiae voluptas consequatur aut corporis quia. Recusandae aut.',
    image: background,
  },
  {
    title: 'Itaque facere fugiat eum.',
    description: 'Itaque facere fugiat eum. Tempora eum molestiae voluptas consequatur aut corporis quia. Recusandae aut.',
    image: background,
  }
]

const Products = () => {
  return (
    <div className="products">
      <h3 className="products__intro">Products</h3>
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
