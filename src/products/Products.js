import React from 'react'

import { Product } from '../product'

import background from './assets/background.jpg'
import giftIcon from './assets/gift_icon_white.png'

import './Products.css'

const products = [
  {
    title: 'Itaque facere fugiat eum.',
    description: 'Itaque facere fugiat eum. Tempora eum molestiae voluptas consequatur aut corporis quia. Recusandae aut.',
    image: background,
    alt: 'Product 1'
  },
  {
    title: 'Itaque facere fugiat eum.',
    description: 'Itaque facere fugiat eum. Tempora eum molestiae voluptas consequatur aut corporis quia. Recusandae aut.',
    image: background,
    alt: 'Product 2'
  },
  {
    title: 'Itaque facere fugiat eum.',
    description: 'Itaque facere fugiat eum. Tempora eum molestiae voluptas consequatur aut corporis quia. Recusandae aut.',
    image: background,
    alt: 'Product 3'
  },
  {
    title: 'I would like a personal Packaging',
    description: '',
    image: giftIcon,
    alt: 'Product 4'
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
            alt={product.alt}
          />
        ))
      }
    </div>
  )
}

export { Products }
