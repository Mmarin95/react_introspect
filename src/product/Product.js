import React from 'react'

import './Product.css'

const Product = ({ title, description, image }) => {
  return(
    <div className="product">
      <img className="product__image" src={image} alt="the description"/>
      <div className="product__block">
        <span className="product__title">{ title }</span>
        <p className="product__description">{ description }</p>
      </div>
    </div>
  )
}

export { Product }
