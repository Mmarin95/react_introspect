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
    isSpecial: false,
  },
  {
    title: 'Itaque facere fugiat eum.',
    description: 'Itaque facere fugiat eum. Tempora eum molestiae voluptas consequatur aut corporis quia. Recusandae aut.',
    image: background,
    isSpecial: false,
  },
  {
    title: 'Itaque facere fugiat eum.',
    description: 'Itaque facere fugiat eum. Tempora eum molestiae voluptas consequatur aut corporis quia. Recusandae aut.',
    image: background,
    isSpecial: false,
  },
  {
    title: '',
    description: 'I would like a personal Packaging',
    image: giftIcon,
    isSpecial: true,
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
            isSpecial={product.isSpecial}
          />
        ))
      }
    </div>
  )
}

export { Products }
