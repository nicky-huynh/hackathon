// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import cartImage from '../assets/cartIcon.png'; // Adjust the path as necessary

const Header = ( { cart, balance } ) => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-logo"><Link to="/" className="header-logo">Groin Shop</Link>
        </h1>
        <nav className="header-nav">
          <div className="header-balance">{balance} GROINS</div>
          <Link to="/checkout" className="header-link">
          <img src={cartImage} alt="Cart" className="cart-icon" />
            </Link>
          <span className="cart-count">{cart.length}</span>
        </nav>
      </div>
    </header>
  );
};

export default Header;
