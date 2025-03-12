// Message processing logic for the chatbot

const { findBestResponse } = require('./response-finder');

/**
 * Process an incoming message and generate a response
 * @param {string} message - User message
 * @param {Object} knowledgeBase - Knowledge base data
 * @returns {string} - Chatbot response
 */
function processMessage(message, knowledgeBase) {
  // Convert message to lowercase for easier matching
  const normalizedMessage = message.toLowerCase();
  
  // Find the best response for the message
  const response = findBestResponse(normalizedMessage, knowledgeBase);
  
  return response;
}

module.exports = {
  processMessage
};
