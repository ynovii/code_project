const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const htmlPages = require('./webpack.pages.js')

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    schedule: './src/javascripts/schedule.js',
    prices: './src/javascripts/prices.js',
    booking: './src/javascripts/booking.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve('.', 'docs')
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]'
        }
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin(), ...htmlPages],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  },
  resolve: {
    fallback: {
      stream: require.resolve('stream-browserify')
    }
  }
}
