// Web integration for Pickleball Kingdom chatbot

// Import knowledge base data directly to avoid Node.js module dependencies
const generalInfo = {
  hours: "Pickleball Kingdom is open from 6 AM to 11 PM every day of the week.",
  
  openPlay: "Open play runs in three sessions daily:\n- Morning session: 6 AM to 10 AM\n- Lunchtime session: 11 AM to 2 PM\n- Evening session: 5 PM to 8 PM\nAll skill levels are welcome during open play!",
  
  location: "Please visit our website for the address and directions to our facility.",
  
  contact: "If you have any questions or need assistance, please contact us at our main facility phone number or email available on our website.",
  
  defaultResponse: "Thank you for your message. If you have questions about court bookings, membership, or our facilities, please let me know. I'm here to help!"
};

const courtBooking = {
  howToBook: "You can book courts at Pickleball Kingdom through our website or by calling our facility directly. Courts are available on a first-come, first-served basis.",
  
  pricing: "Court bookings cost $15 per hour per person. We offer discounted rates for members.",
  
  cancellation: "Court reservations can be canceled according to our cancellation policy. For specific details on our cancellation policy, please visit our website or contact our facility directly.",
  
  reservationPolicy: "Court reservations, including dates and times, are first come first served, are based upon availability, and are not guaranteed. In certain cases, we may need to modify, limit, cancel, or suspend all reservations and reservation times for special events such as tournaments, corporate events, or other events or activities to be held by Operator. We will do our best to provide notice of cancellations reasonably in advance."
};

const membership = {
  info: "Pickleball Kingdom offers various membership options to fit your playing needs. Please visit our website or contact our facility for detailed information on current membership rates and benefits.",
  
  benefits: "Membership benefits include priority court booking, discounted court rates, special member events, and more.",
  
  cancellation: "For monthly membership payments, you must notify us of your cancellation or pausing request no less than 30 days before the next recurring billing date to avoid another payment. No refunds of any partial month payments will be given upon the notice of cancellation of monthly recurring membership payments. This cancellation notice needs to be given in person at the club. If a member is injured or out of state, then an email needs to be sent to the manager of the club with a copy of the member's drivers license or state ID.\n\nFor annual membership payments, you must notify us of your cancellation request within 7 days after the date on which you signed up for your membership in order to obtain a full refund of the annual payment amount. After 7 days have expired, no refund will be given for any amount of the annual payment if you cancel your membership.",
  
  pausing: "Any membership account, except for annual plans, can be paused once per 12 months. Member needs to contact the Operator's manager in writing to have their membership paused or restarted. There is an administrative fee to pause the membership and a recurring monthly charge while membership is paused. The pausing date needs to be no less than 72 hours before the billing date or the funds will be pulled.\n\nWhen restarting a monthly membership after pausing it, the Member is subject to the current price of the membership and not what it was when the membership was paused. If the club's capacity membership number has been hit, then the membership will be placed on the waiting list until a spot opens up for it to be reinstated into. There is no guarantee of when that reinstatement will be."
};

const liability = {
  summary: "All participants at Pickleball Kingdom must agree to our Terms of Use and Release of Liability, Waiver of Claims, Assumption of Risks and Indemnity Agreement. This is a binding legal agreement where participants waive certain legal rights. For the full details, please review the complete waiver available at our facility or on our website.",
  
  risks: "Participation in activities at Pickleball Kingdom involves inherent risks. The Premises and Activities offered by Operator may be physically and mentally demanding, dangerous, and involve risks of injury, damage, illness, disease, and/or death. By participating, you voluntarily assume all such risks.\n\nThe dangers and risks include, but are not limited to: pickleball courts and facilities, slips, trips, collisions, falls, equipment malfunction or misuse, property theft or damage, and accidents that may result in injury, damage, or illness.",
  
  codeOfConduct: "Our Code of Conduct requires that all participants:\n- Not engage in unsportsmanlike conduct\n- Not endanger the health, safety, or wellbeing of others\n- Not use obscene language or gestures\n- Treat others with respect\n- Follow all rules, policies, and procedures\n- Accept responsibility for their own actions\n- Properly supervise children and minors\n- Engage in conduct that is free from fear, discrimination, abuse, and harassment\n- Not give private lessons without express written consent from management\n\nViolation of this Code of Conduct may result in immediate suspension or termination of membership without refund.",
  
  mediaRelease: "By participating at Pickleball Kingdom, you consent to the use, re-use, publication, and re-publication of photographs, videos, audio, or other images or recordings taken of you for promotional, advertising, or trade purposes.",
  
  healthAndSafety: "The health and safety of our Members and Guests is our highest priority. You must use proper clothing and equipment, and take personal responsibility for ensuring properly fitting clothing, footwear, hydration, nourishment, and equipment use."
};

const customResponses = {
  'hello': 'Hello! Welcome to Pickleball Kingdom. How can I assist you today?',
  
  'hi': 'Hi there! Welcome to Pickleball Kingdom. How can I help you today?',
  
  'thank': 'You\'re welcome! If you have any other questions about Pickleball Kingdom, feel free to ask.',
  
  'covid': 'The health and safety of our Members and Guests is our highest priority. Please check our website or contact our facility directly for the latest information on our COVID-19 protocols and safety measures.',
  
  'beginner': 'Beginners are absolutely welcome at Pickleball Kingdom! We offer introductory classes and clinics for those new to the sport. Open play sessions are also a great way to get started and meet other players.',
  
  'lesson': 'Pickleball Kingdom offers lessons and clinics for all skill levels. Please visit our website or contact our facility for information on scheduling and pricing for lessons.',
  
  'equipment': 'Pickleball Kingdom offers equipment rental for those who don\'t have their own paddles or balls. We also have a pro shop where you can purchase quality pickleball equipment.',
  
  'tournament': 'We regularly host tournaments at Pickleball Kingdom. For information on upcoming tournaments, registration, and fees, please visit our website or contact our facility directly.',
  
  'parking': 'Pickleball Kingdom provides free parking for all members and guests in our dedicated parking lot.',
  
  'food': 'We have a café on premises that offers refreshments, snacks, and light meals. Outside food and beverages are also permitted in designated areas.'
};

// Create knowledge base
const knowledgeBase = {
  generalInfo,
  courtBooking,
  membership,
  liability,
  customResponses
};

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
  
  if (message.includes('code of conduct')) {
    return knowledgeBase.liability.codeOfConduct;
  }
  
  // Default response if no match is found
  return knowledgeBase.generalInfo.defaultResponse;
}

/**
 * Process an incoming message and generate a response
 * @param {string} message - User message
 * @returns {string} - Chatbot response
 */
function processMessage(message) {
  // Convert message to lowercase for easier matching
  const normalizedMessage = message.toLowerCase();
  
  // Find the best response for the message
  const response = findBestResponse(normalizedMessage, knowledgeBase);
  
  return response;
}

/**
 * Handle incoming message from user
 * @param {string} message - User message
 * @returns {string} - Chatbot response
 */
function handleMessage(message) {
  return processMessage(message);
}

// Expose to global scope for web integration
window.PickleballKingdomChatbot = {
  handleMessage
};

export default {
  handleMessage
};
