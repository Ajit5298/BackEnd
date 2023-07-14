import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [userData, setUserData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (userData.email && userData.password) {
      try {
        const response = await axios.post('http://localhost:8000/login', {
          email: userData.email,
          password: userData.password,
        });

        console.log(response.data, 'response');

        if (response.data.status === 200) {
          alert(response.data.message);
          navigate('/');
        } else {
          alert('Error..');
        }
      } catch (error) {
        alert('Error occurred while logging in.');
      }
    } else {
      alert('Please fill in all the fields.');
    }
  };

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
