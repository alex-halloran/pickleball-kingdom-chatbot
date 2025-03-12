# Pickleball Kingdom Chatbot

A chatbot for Pickleball Kingdom to handle common inquiries and provide information based on our policies.

## Features

- Answers common questions about court bookings, membership, and facility information
- Provides information on policies and liability waivers
- Easy to update with new information and responses

## Structure

- `index.js`: Main entry point for the chatbot
- `config/`: Contains configuration files for the chatbot
- `data/`: Contains knowledge base information
- `lib/`: Contains utility functions and helper code

## How to Update

To add new information or responses to the chatbot, update the appropriate file in the `data/` directory:

- `general-info.js`: General information about Pickleball Kingdom
- `court-booking.js`: Information about court bookings
- `membership.js`: Information about membership options
- `liability.js`: Information from the liability waiver
- `custom-responses.js`: Add custom responses for specific questions

After updating, commit and push your changes. The chatbot will automatically use the updated information.
