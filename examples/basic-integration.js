// Example of basic integration for the Pickleball Kingdom chatbot

const { handleMessage } = require('../index');

// Example usage
const userMessages = [
  'What are your hours?',
  'How much does it cost to book a court?',
  'Can I cancel my membership?',
  'What happens if I get injured?',
  'Do you have open play times?',
  'Hello, I\'m new to pickleball',
  'Do you offer lessons?',
  'Is there a code of conduct?',
  'What if I need to cancel my court reservation?'
];

// Process each message and display the response
console.log('=== PICKLEBALL KINGDOM CHATBOT EXAMPLE ===');
console.log('This example shows how the chatbot responds to common questions.\n');

userMessages.forEach(message => {
  console.log(`User: ${message}`);
  const response = handleMessage(message);
  console.log(`Chatbot: ${response}`);
  console.log('---');
});

// Interactive mode
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('\n=== INTERACTIVE MODE ===');
console.log('Type a message to get a response from the chatbot.');
console.log('Type "exit" to quit.\n');

function promptUser() {
  rl.question('You: ', (message) => {
    if (message.toLowerCase() === 'exit') {
      console.log('Goodbye!');
      rl.close();
      return;
    }
    
    const response = handleMessage(message);
    console.log(`Chatbot: ${response}`);
    promptUser();
  });
}

promptUser();
