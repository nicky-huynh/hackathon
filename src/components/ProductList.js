// src/components/ProductList.js
import React from 'react';
import Product from './Product';
import './ProductList.css';

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <Product key={product.id} product={product} addToCart={addToCart} icon={product.icon} />
      ))}
    </div>
  );
};

export default ProductList;
