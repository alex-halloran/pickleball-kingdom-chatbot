# Pickleball Kingdom Chatbot Demo

This folder contains a demo implementation of the Pickleball Kingdom chatbot that can be used to show how the chatbot would look and function on a website.

## Running the Demo

There are two ways to run the demo:

### Method 1: Using the included HTTP server

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the demo server:
   ```bash
   npm run serve-demo
   ```

This will automatically open the demo page in your default browser.

### Method 2: Manual file opening

You can simply open the `index.html` file in this directory in your web browser. This works without any server because all the necessary JavaScript is included in the pre-built bundle.

## Customizing the Demo

You can modify the `index.html` file to change the appearance or behavior of the chatbot. The main elements you might want to customize are:

- The colors in the CSS section
- The initial welcome message
- The quick reply suggestions

## Integrating with Your Website

To add this chatbot to your actual website:

1. Copy the `dist/chatbot-bundle.js` file to your website's assets directory
2. Copy the HTML and CSS from the `<style>` and chatbot container sections of `index.html`
3. Add the script tag pointing to the chatbot bundle location
4. Customize as needed

## Building a Custom Bundle

If you make changes to the knowledge base or chatbot logic, you'll need to rebuild the bundle:

```bash
npm run build
```

This will create an updated version of the bundle in the `dist` directory.
