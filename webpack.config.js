var path = require("path");
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
console.log(ROOT_PATH);

var APP_PATH = path.resolve(ROOT_PATH, "app");
var BUILD_PATH = path.resolve(ROOT_PATH, "build");

module.exports = {
  entry: APP_PATH,
  output: {
    path: BUILD_PATH,
    filename: "bundle.js"
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
  },
  //添加我们的插件 会自动生成一个html文件
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Hello World app'
    })
  ],
}