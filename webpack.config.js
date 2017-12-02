const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: 'build/',
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.less$/, loaders: ["style-loader", "css-loder", "less-loader"] },
    ]
  },
    devServer: {
      contentBase: __dirname,
      historyApiFallback: true
  }
}

module.exports = config;
