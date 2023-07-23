import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/User.context'

const AddProduct = () => {

  const [user, setUser] = useState({});
  // console.log(user, " User")
  const { state } = useContext(AuthContext)
  const [productData, setProductData] = useState({ name: "", image: "", price: "" ,artnumber:""})
  const router = useNavigate()
  const handleChange = (event) => {
    setProductData({ ...productData, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (productData.name && productData.image && productData.price) {
      const response = await axios.post("http://localhost:8000/add-product", {
        name: productData.name,
        image: productData.image,
        price: productData.price,
        artnumber: productData.artnumber,
        userId: user?._id
      });
      if (response.data.status == 200) {
        setProductData({ name: "", image: "", price: "" ,artnumber:""})
        router('/all-products');
        alert("Product added successfully.")
      } else {
        alert("Error please try again..")
      }
    } else {
      alert("Please fill the all fields..")
    }
  }

  useEffect(() => {
    if (state.user) {
      setUser(state?.user)
    } else {
      setUser({});
    }
  }, [state])


  useEffect(() => {
    if (state?.user) {
      if (state?.user?.role != "Seller") {
        alert("You are not seller to add products.")
        router('/')
      }
    }
  }, [state])

  return (
    <div>
      <div id="bgc">
        <div className="background">
          <div className="shape"></div>
          <div className="shape"></div>
        </div>

        <form id="loginform" onSubmit={handleSubmit}>
          <h1>Add Product here : </h1>
          <label>Name :</label>
          <br />
          <input id="username" onChange={handleChange} type="text" name="name" />
          <br />
          <label>Art-Number :</label>
          <br />
          <input id="username" onChange={handleChange} type="text" name="artnumber" />
          <br />
          <label>Price :</label>
          <br />
          <input id="username" onChange={handleChange} type="number" name="price" />
          <br />
          <label>Image Url :</label>
          <br />
          <input onChange={handleChange} type="text" name="image" />
          <br />
          <input id="but" type="submit" value="Add New Product" />
          <br />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
