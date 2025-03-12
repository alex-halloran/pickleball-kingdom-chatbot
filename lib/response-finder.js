// Response finder logic

/**
 * Find the best response for a user message
 * @param {string} message - Normalized user message
 * @param {Object} knowledgeBase - Knowledge base data
 * @returns {string} - Chatbot response
 */
function findBestResponse(message, knowledgeBase) {
  // Check custom responses first
  for (const pattern of Object.keys(knowledgeBase.customResponses)) {
    if (message.includes(pattern)) {
      return knowledgeBase.customResponses[pattern];
    }
  }
  
  // Check for general info queries
  if (message.includes('hour') || message.includes('open') || message.includes('close')) {
    return knowledgeBase.generalInfo.hours;
  }
  
  if (message.includes('open play') || message.includes('drop in')) {
    return knowledgeBase.generalInfo.openPlay;
  }
  
  // Check for court booking queries
  if (message.includes('book') || message.includes('reserve') || message.includes('court')) {
    return knowledgeBase.courtBooking.howToBook;
  }
  
  if (message.includes('cost') || message.includes('price') || message.includes('fee')) {
    return knowledgeBase.courtBooking.pricing;
  }
  
  if (message.includes('cancel')) {
    return knowledgeBase.courtBooking.cancellation;
  }
  
  // Check for membership queries
  if (message.includes('member') || message.includes('join')) {
    return knowledgeBase.membership.info;
  }
  
  if (message.includes('cancel membership') || message.includes('end membership')) {
    return knowledgeBase.membership.cancellation;
  }
  
  // Check for liability waiver queries
  if (message.includes('waiver') || message.includes('liability') || message.includes('legal')) {
    return knowledgeBase.liability.summary;
  }
  
  if (message.includes('risk') || message.includes('danger') || message.includes('safety')) {
    return knowledgeBase.liability.risks;
  }
  
  // Default response if no match is found
  return knowledgeBase.generalInfo.defaultResponse;
}

module.exports = {
  findBestResponse
};
