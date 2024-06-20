// src/components/Product.js
import React from 'react';
import './Product.css';

const Product = ({ product, addToCart, icon }) => {
  return (
    <div className="product-card">
      {icon && <img src={icon} alt={`${product.name} icon`} className="product-icon" />}
      <div className="product-details">
        <h2 className="product-name">{product.name.toUpperCase()}</h2>
        <p className="product-price">{product.price} GROINS</p>
        <button className="add-to-cart-button" onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
