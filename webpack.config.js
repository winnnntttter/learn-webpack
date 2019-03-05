var path = require("path");
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
console.log(ROOT_PATH);

var APP_PATH = path.resolve(ROOT_PATH, "app");
var BUILD_PATH = path.resolve(ROOT_PATH, "build");

module.exports = {
  entry: APP_PATH,//项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
  output: {//输出的文件名 合并以后的js会命名为bundle.js
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