// @ts-check
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = !isProduction;

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: [
    `${__dirname}/src/index.js`,
  ],
  externals: {
    gon: 'gon',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: `${__dirname}/dist/public`,
    filename: '[name].js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
        title: 'Custom template',
        minify: {
            collapseWhitespace: true,
        },
        template: './src/index.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              reloadAll: true,
              sourceMap: isDevelopment,
              hmr: isDevelopment,
            },
          },
          { loader: 'css-loader', options: { importLoaders: 1, sourceMap: isDevelopment } },
          { loader: 'postcss-loader', options: { sourceMap: isDevelopment } },
        ],
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              reloadAll: true,
              sourceMap: isDevelopment,
              hmr: isDevelopment,
            },
          },
          { loader: 'css-loader', options: { importLoaders: 1, sourceMap: isDevelopment } },
          { loader: 'postcss-loader', options: { sourceMap: isDevelopment } },
          { loader: 'sass-loader', options: { sourceMap: isDevelopment } },
        ],
      },
    ],
  },
};