const path = require('path');

module.exports = {
  mode: 'production',
  entry: './web/chatbot-web.js',
  output: {
    filename: 'chatbot-bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
