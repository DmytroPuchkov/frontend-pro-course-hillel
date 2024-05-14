const path = require('path');
// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const mode = process.env.NODE_ENV;

const isDev = () => process.env.NODE_ENV === "development";
const devServer = isDev() ? { port: 4000, open: true } : undefined;

const webpack = {
  mode,
  entry: {
    app: path.resolve(__dirname, 'src', 'app.js'),
    widget: path.resolve(__dirname, 'src/lib', 'widget.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist',),
    filename: '[name].[contenthash].bundle.js',
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
    }),
    // new webpack.EnvironmentPlugin([{
    //   NODE_ENV: env.NODE_ENV
    // }])
  ],
  devServer 
}

module.exports = webpack;