import React from 'react'

import './Product.css'

const Product = ({ title, description, image, alt }) => {

  if (!description == '') {
    return (
      <div className="product">
        <input className="product__checkbox" type="checkbox" id={title} name={title} value=""></input>
        <img className="product__image" src={image} alt={alt} />
        <div className="product__block">
          <span className="product__title">{title}</span>
          <p className="product__description">{description}</p>
        </div>
      </div>
    )
  } else {
    return (
      <div className="product">
        <input className="product__checkbox" type="checkbox" id={title} name={title} value=""></input>
        <img className="product__image" src={image} alt={alt} />
        <div className="product__block">
          <span className="product__title">{title}</span>
        </div>
      </div>
    )
  }
}

export { Product }
