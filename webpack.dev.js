const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { alias } = require('yargs');

module.exports = {
  entry: './src/index.tsx',
  output: {
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.module\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[folder]_[local]_[hash]',
              },
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
      },
      {
        test: /\.(ts|tsx)?$/,
        use: 'ts-loader',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: 'public/index.html' })],
  resolve: {
    extensions: ['.*', '.js', '.jsx', '.ts', '.tsx'],
    alias: {
      api: path.resolve(__dirname, 'src/api'),
      const: path.resolve(__dirname, 'src/const'),
      components: path.resolve(__dirname, 'src/components'),
      enum: path.resolve(__dirname, 'src/enum'),
      hooks: path.resolve(__dirname, 'src/hooks'),
      types: path.resolve(__dirname, 'src/types'),
      pages: path.resolve(__dirname, 'src/pages'),
      store: path.resolve(__dirname, 'src/store'),
      selectors: path.resolve(__dirname, 'src/selectors'),  
    },
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 3001,
    historyApiFallback: true,
    static: path.resolve(__dirname, 'public'),
    open: true,
    hot: true,
    compress: true,
  },
};