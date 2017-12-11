const path = require('path');

module.exports = {
 context: __dirname,
 entry: './index.js',
 output: {
   path: path.join(__dirname, 'public'),
   filename: 'bundle.js'
 },
 devtool: 'source-map',
 module: {
   rules: [{
     test: /\.jsx?$/,
     loader: 'babel-loader',
     exclude: /node_modules/,
     query: {
       plugins: [
         "react-native-web/babel"
       ],
       presets: [
         'react-native'
       ]
     }
   }]
 }
};