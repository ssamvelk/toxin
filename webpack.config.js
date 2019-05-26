const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),

    entry: {
        app: './js/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '',
    },
    optimization: {
        splitChunks: {
        chunks: 'all',
        }
    },

    module: {
        rules: [
            {//--------------------------------JS
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            },
            {//--------------------------------PUG
                test: /\.pug$/,
                use:[
                    {loader: 'html-loader',},
                    {loader: 'pug-html-loader', options: { data: {} }}
                ]
            },
            {//--------------------------------CSS
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {//-------------------------------SCSS
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options:{ sourceMap: true }
                    }, {
                        loader: "postcss-loader",
                        options:{ sourceMap: true, config: {path: 'src/js/postcss.config.js'} }
                    }, {
                        loader: "sass-loader",
                        options:{ sourceMap: true }
                    }
                ]
            },
            {//-------------------------------IMAGE
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                        {
                            loader:'file-loader',
                            options: {
                                name: 'img/[name].[ext]',
                                exclude: ['src/fonts/'],
                                //outputPath: 'img/'
                            },
                            
                        },
                        {   
                            loader: 'image-webpack-loader',
                            options: {
                              mozjpeg: {
                                progressive: true,
                                quality: 65
                              },
                              // optipng.enabled: false will disable optipng
                              optipng: {
                                enabled: false,
                              },
                              pngquant: {
                                quality: '65-90',
                                speed: 4
                              },
                              gifsicle: {
                                interlaced: false,
                              },
                              // the webp option will enable WEBP
                              webp: {
                                quality: 75
                              }
                            }
                        },
                ]
            },
            {//--------------------------------FONTS
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/',
                        //exclude: ['src/static/', '/src/blocks/']
                    }
                }]
            },
        ]
    },  //-----------module
    devServer: {
        overlay: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "pug/index.pug",
            filename:  'index.html',
            //inject: false
          }),

        new MiniCssExtractPlugin({
            filename: '[name].css',
            //chunkFilename: "[id].css"
        }),

        new CleanWebpackPlugin({}),

        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery'",
            "window.$": "jquery"
        }),

    ],
    devtool: 'eval'

};