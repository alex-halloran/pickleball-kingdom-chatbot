// Example of web integration for the Pickleball Kingdom chatbot

// This is a simplified example of how to integrate the chatbot into a web application
// You would need to adapt this to your specific web framework or platform

const { handleMessage } = require('../index');

// Simulated web framework functions
function setupChatbot() {
  // Set up event listener for the chat form submission
  document.getElementById('chat-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get the user message
    const userMessage = document.getElementById('user-message').value;
    
    // Clear the input field
    document.getElementById('user-message').value = '';
    
    // Display the user message in the chat
    displayMessage('user', userMessage);
    
    // Process the message and get a response
    const response = handleMessage(userMessage);
    
    // Display the chatbot response
    displayMessage('bot', response);
  });
}

// Function to display a message in the chat
function displayMessage(sender, message) {
  const chatContainer = document.getElementById('chat-container');
  
  const messageElement = document.createElement('div');
  messageElement.className = `message ${sender}-message`;
  messageElement.textContent = message;
  
  chatContainer.appendChild(messageElement);
  
  // Scroll to the bottom of the chat container
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Initialize the chatbot when the page loads
window.addEventListener('DOMContentLoaded', setupChatbot);

/*
Example HTML structure for the chatbot:

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pickleball Kingdom Chatbot</title>
  <style>
    #chat-container {
      width: 400px;
      height: 500px;
      border: 1px solid #ccc;
      overflow-y: auto;
      padding: 10px;
      margin-bottom: 10px;
    }
    
    .message {
      margin-bottom: 10px;
      padding: 8px 12px;
      border-radius: 5px;
      max-width: 80%;
    }
    
    .user-message {
      background-color: #e6f7ff;
      margin-left: auto;
      margin-right: 0;
    }
    
    .bot-message {
      background-color: #f2f2f2;
      margin-left: 0;
      margin-right: auto;
    }
    
    #chat-form {
      display: flex;
    }
    
    #user-message {
      flex-grow: 1;
      padding: 8px;
    }
    
    button {
      padding: 8px 16px;
      background-color: #4CAF50;
      color: white;
      border: none;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h1>Pickleball Kingdom Chatbot</h1>
  
  <div id="chat-container"></div>
  
  <form id="chat-form">
    <input type="text" id="user-message" placeholder="Type your message here..." required>
    <button type="submit">Send</button>
  </form>
  
  <script src="bundle.js"></script>
</body>
</html>
*/
