import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../Components/login.css"
import axios from 'axios';

const Register = () => {
    const [userData, setUserData] = useState({ name: "", email: "", password: "" });
    const [role, setRole] = useState("Buyer");
    const router = useNavigate();

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (userData.name && userData.email && userData.password) {
            const response = await axios.post("http://localhost:8000/register", {
                name: userData.name,
                email: userData.email,
                password: userData.password,
                role: role
            })
            console.log(response, "response")
            if (response.data.status === 200) {
                alert(response.data.message)
                router('/login');
            } else {
                alert("Error..")
            }
        } else {
            alert("Please fill all the fields.")
        }

    }
    const roleSlect = (event) => {
        // console.log(event.target.value, "role")
        setRole(event.target.value)
    }

    return (
        <div>
            <div id="bgc">
                <div className="background">
                    <div className="shape"></div>
                    <div className="shape"></div>
                </div>
               
                <form id="loginform" onSubmit={handleSubmit}>
                <h3>Register Here</h3>
                    <label>Name</label><br />
                    <input id="username" onChange={handleChange} type='text' name="name" value={userData.name} /><br />
                    <label>Select Your role</label><br />
                <select id="select"  onChange={roleSlect}>
                    <option id="selectoption"  value="Buyer" >Buyer</option>
                    <option  id="selectoption" value="Seller">Seller</option>
                    <option id="selectoption" value="Admin">Admin</option>
                    <option id="selectoption" value="Super Admin">Super Admin</option>
                </select><br />
                    <label>Email</label><br />
                    <input id="email" onChange={handleChange} type='email' name="email" value={userData.email} /><br />
                    <label>Password</label><br />
                    <input id="password" onChange={handleChange} type='password' name="password" value={userData.password} /><br />
                    <input id="but" type='submit' value='Register' /><br />
                    
                </form>
            </div>
        </div>
    )
}

export default Register