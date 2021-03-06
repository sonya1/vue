'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)


/*sonya add --- json-server*/
/*const jsonServer = require('json-server')
const apiserver = jsonServer.create()
const apirouter = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
apiserver.use(middlewares)


apiserver.use('/api',apirouter)
apiserver.listen(8081, () => {
  console.log('JSON Server is running')
})*/
/*-----end sonya*/

/*--sonya add --express */
var express = require('express')  
var bodyParser = require('body-parser')  
var apiServer = express()  

apiServer.use(bodyParser.urlencoded({ extended: true }))//extended为false表示使用querystring来解析数据，这是URL-encoded解析器  
// parse application/json   
apiServer.use(bodyParser.json())//添加json解析器  
var apiRouter = express.Router();
var fs = require('fs');
apiRouter.get('/',function(req,res){
  res.json({message:'hooray!welcome to our api!'});
});
apiRouter.route('/:apiName')
  .all(function(req,res){
    fs.readFile('./db.json','utf8',function(err,data){
      if(err) throw err;
      var data = JSON.parse(data);
      if(data[req.params.apiName]){
        console.log('aaaaa!');
        res.json(data[req.params.apiName])
      }else{
        res.send('no such api name');
      }
    })
  })

apiServer.use('/api',apiRouter);
apiServer.listen(8081, () => {
  console.log('Listening at http://localhost:' + (8081) + '\n');
})
/*-----end sonya*/

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: true,
    hot: true,
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
  ]
})



module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
