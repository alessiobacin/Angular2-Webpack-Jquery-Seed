var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    "app": "./app/main.ts"
  },
  output: {
    path: "./dist",
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['', '.ts', '.js'],
    alias: {
            $: "jquery/src/jquery"
    }
  },
  module: {
    loaders: [
      {
        test: /\.ts/,
        loader: 'ts'
      }
    ]
  },
  plugins: [
      new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
      }),
      new HtmlWebpackPlugin({
          template: "./index.html"
      })
  ]
}