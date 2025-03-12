// Knowledge base loader for the chatbot

const generalInfo = require('../data/general-info');
const courtBooking = require('../data/court-booking');
const membership = require('../data/membership');
const liability = require('../data/liability');
const customResponses = require('../data/custom-responses');

/**
 * Load the knowledge base for the chatbot
 * @returns {Object} - Combined knowledge base
 */
function loadKnowledgeBase() {
  return {
    generalInfo,
    courtBooking,
    membership,
    liability,
    customResponses
  };
}

module.exports = {
  loadKnowledgeBase
};
