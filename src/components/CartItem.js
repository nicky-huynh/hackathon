// src/components/CartItem.js
import React from 'react';
import './CartItem.css';

const CartItem = ({ product, removeFromCart }) => {
  return (
    <div className="cart-item">
      <h2 className="cart-item-name">{product.name}</h2>
      <p className="cart-item-price">{product.price} GROINS</p>
      <button className="remove-from-cart-button" onClick={() => removeFromCart(product)}>X</button>
    </div>
  );
};

export default CartItem;
