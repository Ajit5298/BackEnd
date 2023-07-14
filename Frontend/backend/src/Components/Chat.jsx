import { Navbar } from './Navbar';
import { Footer } from './Footer';
import React, { useState, useEffect } from 'react';
import '../Components/Style.css';
import io from 'socket.io-client';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);
  const [isFirstMessage, setIsFirstMessage] = useState(true);

  useEffect(() => {
    // Connect to the server using Socket.IO
    const newSocket = io('http://localhost:3000');
    setSocket(newSocket);

    // Clean up the socket connection on component unmount
    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    // Listen for new messages from the server
    if (socket) {
      socket.on('message', (message) => {
        setMessages((prevMessages) => [...prevMessages, { text: message, isAutoReply: true }]);
      });
    }

    // Add default replies when the component mounts
    if (isFirstMessage) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: 'Welcome to the chat! How can I assist you?', isAutoReply: true },
      ]);
      setIsFirstMessage(false);
    }
  }, [socket, isFirstMessage]);

  const handleMessageSend = (e) => {
    e.preventDefault();
    const message = e.target.elements.message.value;
    if (message.trim() !== '') {
      // Add user message to the chat
      setMessages((prevMessages) => [...prevMessages, { text: message, isAutoReply: false }]);

      // Send the user message to the server
      if (socket) {
        socket.emit('message', message);

        // Check if the user is repeating a message
        if (!isFirstMessage) {
          const reply = 'Thank you for your message! Our executive will shortly connect with you.';
          setMessages((prevMessages) => [...prevMessages, { text: reply, isAutoReply: true }]);
        }
      }

      setIsFirstMessage(false);
      e.target.elements.message.value = '';
    }
  };

  return (
    <div>
      <Navbar />
      <div id="chatbg">
        <div className="chat-container">
          <div id="chatus">
            <h1>Chat with us</h1>
          </div>
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.isAutoReply ? 'auto-reply' : ''}`}>
                {message.text}
              </div>
            ))}
          </div>
          <form className="chat-form" onSubmit={handleMessageSend}>
            <input
              type="text"
              name="message"
              placeholder="Type your message..."
              className="message-input"
            />
            <button type="submit" className="send-button">
              Send
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Chat;











// import { Navbar } from './Navbar';
// import {Footer} from './Footer'
// import React, { useState } from 'react';
// import '../Components/Style.css';

// const Chat = () => {
//   const [messages, setMessages] = useState([]);

//   const handleMessageSend = (e) => {
//     e.preventDefault();
//     const message = e.target.elements.message.value;
//     if (message.trim() !== '') {
//       // Add user message to the chat
//       setMessages((prevMessages) => [...prevMessages, { text: message, isAutoReply: false }]);

//       // Check if the user message triggers an auto-reply
//       if (message.toLowerCase().includes('')) {
//         const autoReply = 'Thank you for contacting Nanandkar Shoe Mart! How can we assist you today?';
//         // Add auto-reply to the chat
//         setMessages((prevMessages) => [...prevMessages, { text: autoReply, isAutoReply: true }]);
//       }

//       e.target.elements.message.value = '';
//     }
//   };

//   return (
//     <div>
//       <Navbar />


//       <div id="chatbg">

//         <div className="chat-container">
//           <div id="chatus"><h1>Chat with us</h1></div>
//           <div className="chat-messages">
//             {messages.map((message, index) => (
//               <div key={index} className={`message ${message.isAutoReply ? 'auto-reply' : ''}`}>
//                 {message.text}
//               </div>
//             ))}
//           </div>
//           <form className="chat-form" onSubmit={handleMessageSend}>
//             <input
//               type="text"
//               name="message"
//               placeholder="Type your message..."
//               className="message-input"
//             />
//             <button type="submit" className="send-button">
//               Send
//             </button>
//           </form>
//         </div>
//       </div>
//       <footer/>
//     </div>
//   );
// };

// export default Chat;