const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [new HtmlWebpackPlugin({
    template:path.join(__dirname,'./index.html'),
    filename:'index.html'
  })],
  module: {
    rules: [
      {test:/\.css$/,use:['style-loader','css-loader']},
      {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
      {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
      {test:/\.(jpg|png|jpeg|bmp|gif)$/,use:'url-loader?limit=104939&name=[hash:8]-[name].[ext]'},
      {test:/\.(ttf|woff|woff2|svg|eot)$/,use:'url-loader'},
      {test:/\.js$/,use:'babel-loader', exclude:/node_modules/ },
      {test:/\.vue$/,use:'vue-loader'}


    ]
  },
/*  resolve: {
    alias: {'vue$':'../node_modules/vue/dist/vue.js'}
  }*/
}

