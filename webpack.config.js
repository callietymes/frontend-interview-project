const webpack = require('webpack')
const path = require('path')
const autoprefixer = require('autoprefixer')
const precss = require('precss')

module.exports = {
  entry: './src/app.js',
  output: {
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',

        options: {
          presets: ['es2015'],
          plugins: ['transform-object-rest-spread']
        }
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'resolve-url-loader'
          },
          {
            loader: 'sass-loader',
            options:  {
              // So we can use @import statements
              includePaths: [
                path.resolve(
                  __dirname, 'src'
                )
              ]
            }
          }
        ]
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          name: 'font/[name].[hash].[ext]'
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    compress: true,
    port: 9000
  }
}
