const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  context: path.resolve(__dirname, 'src'),

  entry: {
    app: './js/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.pug$/,
        use: [
          { loader: 'html-loader' },
          { loader: 'pug-html-loader', options: { data: {} } },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: { path: 'src/js/postcss.config.js' },
            },
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[ext]',
              exclude: ['src/fonts/'],
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.6, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
      {
        test: /\.(ico)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'pages/index/index.pug',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: 'pages/main/main.pug',
      filename: 'main.html',
    }),
    new HtmlWebpackPlugin({
      template: 'pages/colors-and-types/colors-and-types.pug',
      filename: 'colors-and-types.html',
    }),
    new HtmlWebpackPlugin({
      template: 'pages/cards/cards.pug',
      filename: 'cards.html',
    }),
    new HtmlWebpackPlugin({
      template: 'pages/headers-and-footers/headers-and-footers.pug',
      filename: 'headers-and-footers.html',
    }),
    new HtmlWebpackPlugin({
      template: 'pages/form-elements/form-elements.pug',
      filename: 'form-elements.html',
    }),
    new HtmlWebpackPlugin({
      template: 'pages/search-room/search-room.pug',
      filename: 'search-room.html',
    }),
    new HtmlWebpackPlugin({
      template: 'pages/room-details/room-details.pug',
      filename: 'room-details.html',
    }),
    new HtmlWebpackPlugin({
      template: 'pages/registration/registration.pug',
      filename: 'registration.html',
    }),
    new HtmlWebpackPlugin({
      template: 'pages/sign-in/sign-in.pug',
      filename: 'sign-in.html',
    }),

    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),

    new CleanWebpackPlugin({}),

    new CopyWebpackPlugin({
      patterns: [{ from: 'static/favicon.ico', to: 'img' }],
    }),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': "jquery'",
      'window.$': 'jquery',
    }),
  ],

  devtool: isDev ? 'source-map' : '',

  devServer: {
    overlay: true,
  },
};
