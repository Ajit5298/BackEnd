import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../context/User.context';

const Login = () => {
  const [userData, setUserData] = useState({ email: "", password: "" })
  const router = useNavigate();

  const { state, login, logout } = useContext(AuthContext);
  console.log(state, "- state in login")

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (userData.email && userData.password) {
      const response = await axios.post("http://localhost:8000/login", {
        email: userData.email,
        password: userData.password
      })
      console.log(response.data, "response")
      if (response.data.status == 200) {
        console.log(response.data.data);

        login({ token: response.data.data, payload: response.data.user })
        alert(response.data.message)
        router('/');
        setUserData({ email: "", password: "" })
      } else {
        alert("Error please try again..")
      }
    } else {
      alert("Please fill the all fields..")
    }
  }

  return (
    <div>
      <div id="bgc">
        <div className="background">
          <div className="shape"></div>
          <div className="shape"></div>
        </div>

        <form id="loginform" onSubmit={handleSubmit}>
          <h3>Login Here</h3>
          <label>Email</label>
          <br />
          <input
            id="email"
            onChange={handleChange}
            type="email"
            name="email"
            value={userData.email}
          />
          <br />
          <label>Password</label>
          <br />
          <input
            id="password"
            onChange={handleChange}
            type="password"
            name="password"
            value={userData.password}
          />
          <br />
          <input id="but" type="submit" value="Login" />
          <br />
        </form>
      </div>
    </div>
  );
};

export default Login;
