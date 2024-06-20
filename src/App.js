// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Store from './pages/Store';
import CheckoutPage from './pages/CheckoutPage';
import ThankYouPage from './pages/ThankYouPage';
import Header from './components/Header';


function App() {
  const [cart, setCart] = useState([]);
  const [balance, setBalance] = useState(4000); // Example balance state

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productToRemove) => {
    const index = cart.findIndex(product => product.id === productToRemove.id);
    if (index !== -1) {
      setCart((prevCart) => [
        ...prevCart.slice(0, index),
        ...prevCart.slice(index + 1)
      ]);
    }
  };

  return (
    <Router>
      <div>
        <Header cart={cart} balance={balance} />
        <Routes>
          <Route path="/" element={<Store addToCart={addToCart}/>}/>
          <Route path="/checkout" element={<CheckoutPage cart={cart} setCart={setCart} removeFromCart={removeFromCart} balance={balance} setBalance={setBalance}/>}/>
          <Route path="/thank-you" element={
            <ThankYouPage />
            } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
