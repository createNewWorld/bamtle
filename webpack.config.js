const path = require("path")
var webpack = require('webpack')
require('babel-polyfill')
const config = require("./config")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const webapckConfig = {
  entry: ['babel-polyfill', './examples/main.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  // publicPath: path.resolve(__dirname, '/static/'),
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]?[hash]'
            }
          },
          'url-loader'
        ]
      },
      {
        test: /\.css$/,
        loader: 'style-loader'
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': './examples',
      '~': './packages',
      '~cpn': './packages/components'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('./config/index')
    }),
    new CleanWebpackPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin(
      {
        title: 'bamtle',
        favicon: './favicon.ico',
        template: 'index.html'
      }
    ),
    
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       //定义要拷贝的源文件
    //       from: __dirname + '/public/index.html',
    //       //拷贝到的目标文件夹
    //       to: '/dist',
    //       //忽略拷贝指定的文件
    //       // ignore: ['.*']
    //     }
    //   ]
    // })
  ],
  devServer: {
    contentBase: './dist',
    port: 8080,
    hot: true, //开启 Hot Module Replacement
    inline: true, //实时刷新 
    historyApiFallback: true,//不跳转
    noInfo: true,
    hotOnly: true //即使HMR没有生效, 浏览器也不自动刷新
  },
  devtool: 'cheap-module-eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}

module.exports = webapckConfig;