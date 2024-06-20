// src/pages/ThankYouPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ThankYouPage.css';

const ThankYouPage = () => {
  return (
    <div className="thank-you-page">
      <h1>Thanks for your GROIN redemption!</h1>
      <p>We appreciate your use of the redemptions. If you have any questions, please email adi@grindr.com.</p>
      <Link to="/" className="back-to-store-button">Back to Store</Link>
    </div>
  );
};

export default ThankYouPage;
