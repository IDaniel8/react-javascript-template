const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: {
    polyfills: ['core-js/stable', 'whatwg-fetch'],
    app: {
      import: ['react-hot-loader/patch', path.resolve(__dirname, '../src/index.js')],
      dependOn: 'polyfills',
    },
  },
  output: {
    path: path.resolve(__dirname, '../bundle'),
    filename: '[name].[contenthash].js',
    publicPath: '',
  },
  module: {
    rules: [
      {
        type: 'asset',
        test: /.(png|svg|jpg|jpeg|gif)$/i,
      },
      {
        type: 'asset/resource',
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@shared': path.resolve(__dirname, '../src/shared/'),
      '@assets': path.resolve(__dirname, '../src/assets/'),
      '@api': path.resolve(__dirname, '../src/api/'),
      '@components': path.resolve(__dirname, '../src/components/'),
      '@views': path.resolve(__dirname, '../src/views/'),
      '@theme': path.resolve(__dirname, '../src/theme/'),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
}
