import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

const ProductData = require('../Components/JSON/Product.json');

export const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedQuantity, setSelectedQuantity] = useState(0);

  useEffect(() => {
    const selectedProduct = ProductData.find((item) => item.id === parseInt(id));
    setProduct(selectedProduct);
  }, [id]);

  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (event) => {
    const quantity = parseInt(event.target.value);
    setSelectedQuantity(quantity);
  };

  const handleAddToCart = () => {
    const cartData = {
      product,
      color: selectedColor,
      size: selectedSize,
      quantity: selectedQuantity,
    };
    localStorage.setItem('cartData', JSON.stringify(cartData));
    navigate('/cart'); // Redirect to the AddToCartPage
  };

  const handleBuyNow = () => {
    const buyNowData = {
      product,
      color: selectedColor,
      size: selectedSize,
      quantity: selectedQuantity,
    };
    localStorage.setItem('buyNowData', JSON.stringify(buyNowData));
    navigate('/buynow'); // Redirect to the BuyNowPage
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div id="singlepage">
        <div id="showimg">
          <div id="imgfile">
            <img src={product.img} alt={product.type} />
          </div>
        </div>

        <div id="showinfopage">
          <div id="unit">{product.type}</div>
          <div id="unitname">
            Serial Number:- <span>{product.info}</span>
          </div>
          <div id="unitprice">
            <span id="price1">{product.mrp}</span>
            <span id="price1">
              <s>{product.price}</s>
            </span>
            <span id="price2"> {product.dis}</span>
            <span id="price3"> {product.tax}</span>
          </div>

          <div id="unitcolor">
            {product.colors.map((color) => (
              <div key={color.id} id={`color${color.id}`}>
                <div></div>
                <div
                  id="textc"
                  onClick={() => handleColorSelection(color.name)}
                >
                  {color.name}
                </div>
              </div>
            ))}
          </div>

          <div id="sizetext">
            <h3>Select Size :-</h3>
          </div>
          <div id="unitsize">
            {product.sizes.map((size) => (
              <div key={size.id} onClick={() => handleSizeSelection(size.name)}>
                {size.name}
              </div>
            ))}
          </div>

          <div id="sizetext">
            <h3>Quantity :-</h3>
          </div>
          <div id="unitquntity">
            <div id="btttn">
              <input
                type="number"
                value={selectedQuantity}
                onChange={handleQuantityChange}
              />
            </div>
          </div>

          <div id="unitaddorbuy">
            <button onClick={handleAddToCart}>Add To Cart</button>
            <button onClick={handleBuyNow}>BUY NOW</button>
          </div>

          <div id="unitremark">
            <h6>ENJOY FREE SHIPPING ON THE NILL VALUE OF 1500 & ABOVE</h6>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
