import React, { useState } from 'react';
import axios from 'axios';
import './Chatbot.css';

function Chatbot() {
  const [userInput, setUserInput] = useState('');
  const [chatbotMessages, setChatbotMessages] = useState([]);

  const sendMessageToRasa = async (message) => {
    try {
      const response = await fetch('http://localhost:5005/webhooks/rest/webhook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          sender: "user",
          message: message
        })
      });
      const messages = await response.json();
      messages.forEach(msg => {
        displayMessage(msg.text, 'bot');
      });
    } catch (error) {
      console.error('Error connecting to Rasa:', error);
      displayMessage('Error communicating with the bot.', 'bot');
    }
  };

  const sendMessageToChatbot = () => {
    const message = userInput.trim();
    if (message) {
      displayMessage(message, 'user');
      setUserInput('');
      sendMessageToRasa(message);
    }
  };

  const displayMessage = (message, sender) => {
    setChatbotMessages(prevMessages => [...prevMessages, { sender: sender, message: message }]);
  };

  return (
    <div id="chatbot-container">
      <div id="chatbot-messages">
        {chatbotMessages.map((message, index) => (
          <div key={index}><strong>{message.sender === 'user' ? 'Tú' : 'Chatbot'}:</strong> {message.message}</div>
        ))}
      </div>
      <div className='input-container'>
        <input
          type="text"
          value={userInput}
          onChange={e => setUserInput(e.target.value)}
          placeholder="Escribe aquí..."
        />
        <button onClick={sendMessageToChatbot}>Enviar</button>
      </div>
    </div>
  );
}

export default Chatbot;
