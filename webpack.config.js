var path = require("path");
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);

var APP_PATH = path.resolve(ROOT_PATH, "app");
var BUILD_PATH = path.resolve(ROOT_PATH, "build");

module.exports = {
  entry: APP_PATH, //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
  output: { //输出的文件名 合并以后的js会命名为bundle.js
    path: BUILD_PATH,
    filename: "bundle.js"
  },
  devServer: { //服务
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
  },
  module: {
    rules: [{
        test: /\.(scss|css)$/,
        include: APP_PATH,
        use: [
          'style-loader',
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        include: [path.resolve(ROOT_PATH, "app/img")],
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }]
      }
    ]
  },
  //添加我们的插件 会自动生成一个html文件
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Hello World app'
    })
  ],
}