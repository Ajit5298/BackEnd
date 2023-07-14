import React from 'react';
import { useParams } from 'react-router-dom';
import ProductData from '../Components/JSON/Product.json';
import { Routes, Route, useNavigate } from 'react-router-dom';

export const Cart = () => {
  const { id } = useParams();
  const currentUser = JSON.parse(localStorage.getItem('CurrentUser'));
  const navigate = useNavigate();

  // Retrieve the product data based on the ID
  const getProductById = (id) => {
    const product = ProductData.find((item) => item.id === parseInt(id));
    return product;
  };

  const product = getProductById(id);
  function handleProductClick(id) {
    navigate(`/products/${id}`); // Navigate to the product page with the selected product's ID as a parameter
  }

  const handleRemoveFromCart = (productId) => {
    // Find the index of the product in the cart
    const productIndex = currentUser.cart.findIndex((item) => item.id === productId);

    if (productIndex !== -1) {
      // Remove the product from the cart array
      currentUser.cart.splice(productIndex, 1);

      // Update the cart in local storage
      localStorage.setItem('CurrentUser', JSON.stringify(currentUser));

      // Force a re-render to update the cart display
      window.location.reload();
    }
  };

  return (
    <div className="cart-page">
      <h1>Cart Page</h1>
      {currentUser && currentUser.cart && currentUser.cart.length > 0 ? (
        currentUser.cart.map((product) => (
          <div key={product.id} className="product-details">
            <img src={product.img} alt={product.type} onClick={() => handleProductClick(product.id)} className="product-image" />
            <div className="product-info">
              <p className="product-type">{product.type}</p>
              <p className="product-description">{product.info}</p>
              <p className="product-price">{product.mrp}</p>
              <p className="product-discount">{product.dis}</p>
            </div>
            <button
              className="remove-button"
              onClick={() => handleRemoveFromCart(product.id)}
            >
              Remove
            </button>
          </div>
        ))
      ) : (
        <div className="empty-cart">
          <p>No product added to cart</p>
        </div>
      )}
    </div>
  );
};
