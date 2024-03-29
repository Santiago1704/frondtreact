import React, { useState } from 'react';
import axios from 'axios';
import './Chatbot.css';

function Chatbot() {
  const [userInput, setUserInput] = useState('');
  const [chatbotMessages, setChatbotMessages] = useState([]);

  const sendMessageToChatbot = async () => {
    // Agregar el mensaje del usuario al estado de mensajes del chatbot
    setChatbotMessages(prevMessages => [...prevMessages, { sender: 'user', message: userInput }]);
    setUserInput('');

    console.log("Mensaje enviado al servidor:", userInput);

    try {
      // Enviar el mensaje al servidor Flask
      const response = await axios.post('http://localhost:8000/chatbot', { message: userInput });
      // Agregar la respuesta del chatbot al estado de mensajes del chatbot
      setChatbotMessages(prevMessages => [...prevMessages, { sender: 'chatbot', message: response.data.message }]);
    } catch (error) {
      console.error('Error al enviar mensaje al chatbot:', error);
      // Mostrar mensaje de error al usuario
      alert('Ocurrió un error al enviar el mensaje al chatbot. Por favor, inténtalo nuevamente.');
    }
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
