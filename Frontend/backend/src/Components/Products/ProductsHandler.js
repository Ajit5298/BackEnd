import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/User.context'
import axios from 'axios';
import { Navbar } from '../Navbar';

const ProductsHandler = () => {
    const { state } = useContext(AuthContext);
    const [updatedData, setUpdatedData] = useState({ name: "", price: "", image: "" });
    console.log(updatedData, "updatedData")
    const [user, setUser] = useState({});
    const [userAddedProduct, setUserAddedProduct] = useState([]);
    // console.log(userAddedProduct, "userAddedProduct from backend")

    useEffect(() => {
        if (state.user) {
            setUser(state?.user)
        } else {
            setUser({});
            setUserAddedProduct([])
        }
    }, [state])


    useEffect(() => {
        async function getSellProduct() {
            const { data } = await axios.post("http://localhost:8000/get-sell-products", { userId: user?._id });
            setUserAddedProduct(data)
        }
        if (user?._id) {
            getSellProduct();
        }
    }, [user])

    const handleChange = (event) => {
        setUpdatedData({ ...updatedData, [event.target.name]: event.target.value })
    }

    const updateProduct = async (event, id) => {
        event.preventDefault();
        alert(id)
    }

    return (
        <div>
            <Navbar/>
            <h1 id="color">Here is Your selling products</h1>
            <div className="bestseller">
                {userAddedProduct && userAddedProduct.map((pro) => (
                    <div >
                        <img id="imgfs"  src={pro.image} />
                        <form onSubmit={(event) => updateProduct(event, pro._id)}>
                            <label id="sibdivs6">Name </label>
                            <div id="sibdivs6"> {pro.name} </div><br />
                            <div id="sibdivs6" >Price </div>
                            <div id="sibdivs6"> {pro.price}  </div><br />
                            <button type='submit'>Update</button>
                        </form>
                    </div >
                ))}
            </div >
        </div >
    )
}

export default ProductsHandler