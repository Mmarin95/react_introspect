import React from 'react'

import './Product.css'

const Product = ({ title, description, image, isSpecial }) => {

  if (!isSpecial) {
    return (
      <div className="product">
        <input className="product__checkbox" type="checkbox" id={title} name={title} value=""></input>
        <img className="product__image" src={image} alt="the description" />
        <div className="product__block">
          <span className="product__title">{title}</span>
          <p className="product__description">{description}</p>
        </div>
      </div>
    )
  } else {
    return (
      <div className="product product--special">
        <input className="product__checkbox product__checkbox--special" type="checkbox" id={title} name={title} value=""></input>
        <img className="product__image product__image--special" src={image} alt="the description" />
        <div className="product__block product__block--special">
          <span className="product__description product__description--special">{description}</span>
        </div>
      </div>
    )
  }
}

export { Product }
