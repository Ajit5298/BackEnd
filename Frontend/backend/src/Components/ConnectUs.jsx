import React, { useState } from 'react';
import { Navbar } from './Navbar';

const ConnectUsPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', { name, email, mobile, message });
    // You can implement your own logic to handle form submission, like sending an API request, etc.
  };

  return (
    <>
    <Navbar />
    <div id="bgccu" className="connect-us-container">
      <h1 className="connect-us-heading">Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <h2>
        <svg id="head" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 256 256"><path d="M201.89,54.66A103.43,103.43,0,0,0,128.79,24H128A104,104,0,0,0,24,128v56a24,24,0,0,0,24,24H64a24,24,0,0,0,24-24V144a24,24,0,0,0-24-24H40.36A88.12,88.12,0,0,1,190.54,65.93,87.39,87.39,0,0,1,215.65,120H192a24,24,0,0,0-24,24v40a24,24,0,0,0,24,24h24a24,24,0,0,1-24,24H136a8,8,0,0,0,0,16h56a40,40,0,0,0,40-40V128A103.41,103.41,0,0,0,201.89,54.66ZM64,136a8,8,0,0,1,8,8v40a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V136Zm128,56a8,8,0,0,1-8-8V144a8,8,0,0,1,8-8h24v56Z"></path></svg>
            <div> </div>GET IN TOUCH </h2>
        <div>
          <label>Name:</label>
          <input
            type="text"
            id="nameInput"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label >Email:</label>
          <input
            type="email"
            id="emailInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label >Mobile:</label>
          <input
            type="tel"
            id="mobileInput"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        <div>
          <label >Message:</label>
          <textarea
            id="messageInput"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    
    </>
  );
};

export default ConnectUsPage;
