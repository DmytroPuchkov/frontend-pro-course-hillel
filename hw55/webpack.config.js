const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  const mode = env.NODE_ENV;
  const isDev = () => process.env.NODE_ENV === "development";
  const devServer = { port: 4000, open: true };

  return {
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
      new webpack.EnvironmentPlugin({ NODE_ENV: env.NODE_ENV })
    ],

    devServer
  };
}