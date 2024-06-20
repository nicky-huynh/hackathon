// src/pages/CheckoutPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from '../components/CartItem';
import './CheckoutPage.css';

const CheckoutPage = ({ cart, setCart, removeFromCart, balance, setBalance }) => {
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  const handleCheckout = () => {
    const total = calculateTotal();
    
    if (total <= balance) {
      // Subtract the total from the balance
      setBalance(balance - total);

      // Clear the cart after checkout
      setCart([]);

      // Redirect to thank you page
      navigate('/thank-you');
    } else {
      alert('Insufficient balance');
    }
  };



  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <div className="cart-items">
        {cart.length > 0 ? (
          cart.map((product, index) => (
            <CartItem key={index} product={product} removeFromCart={removeFromCart} />
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
      {cart.length > 0 && (
        <button className="checkout-button" onClick={handleCheckout}>
          Proceed to Checkout
        </button>
      )}
    </div>
  );
};

export default CheckoutPage;
