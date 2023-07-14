// Men.js

import React from 'react';
import { Navbar } from './Navbar';
import Sidebar from './Sidebar';
import { Footer } from './Footer';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';

const ProductData = require('../Components/JSON/ProductM.json');

export const Men = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem('CurrentUser'));
  const cartItems = currentUser?.cart || [];

  useEffect(() => {
    setProducts(ProductData.map((product) => ({ ...product, inWishlist: false })));
  }, []);

  function handleChat() {
    navigate('/Chat');
  }

  function handleAddToCart(id) {
    if (!currentUser) {
      navigate('/login'); // Redirect to the login page
      return;
    }

    const product = products.find((item) => item.id === id);
    console.log('Added to cart:', product);

    // Add the selected product to the cartItems array
    const updatedCartItems = [...cartItems, product];
    
    // Update the user's cart in the local storage
    currentUser.cart = updatedCartItems;
    localStorage.setItem('CurrentUser', JSON.stringify(currentUser));

    navigate(`/cart/${id}`); // Navigate to cart page with the selected product's ID as a parameter
  }

  function handleToggleWishlist(id) {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, inWishlist: !product.inWishlist } : product
      )
    );
  }

  function handleProductClick(id) {
    navigate(`/products/${id}`); // Navigate to the product page with the selected product's ID as a parameter
  }

  return (
    <>
      <Navbar />
      <div id="mainmen">
        <div id="menside">
          <Sidebar />
        </div>
        <div className="bestseller">
          {products.length > 0 ? (
            products.map((product) => (
              <div id="maindi" key={product.id}>
                <div id="sibdi1">{product.type}</div>
                <div id="sibdi2">
                  <div className="wishlist-icon">
                    <FaHeart
                      className={`wishlist-heart ${product.inWishlist ? 'wishlist-active' : ''}`}
                      onClick={() => handleToggleWishlist(product.id)}
                    />
                  </div>
                  <img id="imgfs" src={product.img} alt={product.type} onClick={() => handleProductClick(product.id)} />
                </div>
                <div id="sibdi3">{product.info}</div>
                <div id="sibdi4">{product.mrp}</div>
                <div id="sibdi6">{product.dis}</div>
                <div id="sibdi5">
                  <button id="cartbut" onClick={() => handleAddToCart(product.id)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div>No More Products</div>
          )}
        </div>
        <div className="corner-div" onClick={handleChat}>
          Need help?
        </div>
      </div>
      <Footer />
    </>
  );
};
