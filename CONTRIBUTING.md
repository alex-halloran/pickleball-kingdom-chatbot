# Contributing to the Pickleball Kingdom Chatbot

Thank you for your interest in contributing to the Pickleball Kingdom chatbot! This document provides guidelines and instructions for making updates to the chatbot.

## How to Update the Knowledge Base

The chatbot's knowledge base is divided into several categories in the `data/` directory:

- `general-info.js`: General information about Pickleball Kingdom
- `court-booking.js`: Information about court bookings
- `membership.js`: Information about membership options
- `liability.js`: Information from the liability waiver
- `custom-responses.js`: Custom responses for specific questions

To update or add information:

1. Open the appropriate file in the `data/` directory
2. Update the existing information or add new entries
3. Commit and push your changes

## Adding New Response Patterns

To add new response patterns to the chatbot, you may need to update the `lib/response-finder.js` file. This file contains the logic for matching user messages to appropriate responses.

## Testing Your Changes

After making changes, you can test the chatbot using the example scripts in the `examples/` directory:

```bash
node examples/basic-integration.js
```

## Best Practices

- Keep responses concise and informative
- Use natural language that is easy to understand
- Regularly update information to ensure accuracy
- Consider common misspellings and alternate phrasings when defining patterns
- Test thoroughly after making changes
