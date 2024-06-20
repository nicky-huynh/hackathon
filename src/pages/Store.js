// src/pages/Store.js
import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import capImage from '../assets/cap.png';
import blackSocksImage from '../assets/blackSocks.png'
import goldSocksImage from '../assets/goldSocks.png'
import greyPantsImage from '../assets/greyPants.png'
import blackGymShortsImage from '../assets/blackGymShorts.png'
import blackHoodieImage from '../assets/blackHoodie.png'
import blackShirtImage from '../assets/blackShirt.png'
import grindrImage from '../assets/grindr.png'

const Store = ( {addToCart} ) => {
  const [products] = useState([
    { id: 1, name: 'Essential Dad Cap', description: '', price: 3200, icon: capImage},
    { id: 2, name: 'Essential Black Socks', description: '', price: 1800, icon: blackSocksImage },
    { id: 3, name: 'Essential Gold Socks', description: '', price: 1800, icon: goldSocksImage },
    { id: 4, name: 'Essential Sweatpants', description: '', price: 4500, icon: greyPantsImage },
    { id: 5, name: 'Essential Gym Shorts', description: '', price: 4000, icon: blackGymShortsImage },
    { id: 6, name: 'Essential Hoodie', description: '', price: 5500, icon: blackHoodieImage },
    { id: 7, name: 'Essential T-Shirt', description: '', price: 3500, icon: blackShirtImage },
    { id: 9, name: '1-month Unlimited Subscription', description: '', price: 4000, icon: grindrImage },
  ]);

  return (
    <div>
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
};

export default Store;
