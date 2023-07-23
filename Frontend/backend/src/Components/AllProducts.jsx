import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navbar } from './Navbar';
import Sidebar from './Sidebar';
import { Footer } from './Footer';
import { useNavigate } from 'react-router-dom';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  function handleChat() {
    navigate('/Chat');
  }

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get('http://localhost:8000/all-products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error retrieving products:', error);
      }
    }
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <div id="mainmen">
        <div id="menside">
          <Sidebar />
        </div>
        <div className="bestseller">
          {products.map((pro) => (
            <div id="maindi" key={pro.id}>
              <div id="sibdi1">{pro.name}</div>
            
              <img id="imgfs" src={pro.image} alt={pro.name} />
              <div id="sibdi3">Rs.{pro.price}</div>
              <div id="sibdi4">{pro.artnumber}</div>
              <div id="sibdi5">
                <button id="cartbut">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
        <div className="corner-div" onClick={handleChat}>
          Need help?
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllProducts;
