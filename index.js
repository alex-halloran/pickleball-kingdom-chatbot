// Main entry point for the Pickleball Kingdom chatbot

const { processMessage } = require('./lib/message-processor');
const { loadKnowledgeBase } = require('./lib/knowledge-base');

// Initialize the knowledge base
const knowledgeBase = loadKnowledgeBase();

/**
 * Handle incoming message from user
 * @param {string} message - User message
 * @returns {string} - Chatbot response
 */
function handleMessage(message) {
  return processMessage(message, knowledgeBase);
}

module.exports = {
  handleMessage
};
