const path = require('path');
const webpack = require('webpack');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const useLoaders = require('./build/useLoaders');
const usePlagins = require('./build/usePlagins');

module.exports = (env) => {
  const mode = env.NODE_ENV;
  const devServer = { port: 9000, open: true };

  return {
    mode,

    entry: {
      app: path.resolve(__dirname, 'src', 'app.js'),
      appTS: path.resolve(__dirname, 'src', 'appTS.ts'),
      reactApp: path.resolve(__dirname, 'src', 'react.jsx'),
    },

    output: {
      path: path.resolve(__dirname, 'dist',),
      filename: '[name].[contenthash].bundle.js',
      clean: true
    },

    plugins: usePlagins(env),

    module: {
      rules: useLoaders(env)
    },

    optimization: !mode === 'production' ? {
      minimizer: [
        `...`,
        new CssMinimizerPlugin(),
      ],
    } : undefined,

    devServer
  };
}