# learn-webpack
https://blog.csdn.net/pei7932658/article/details/78783877

npm install -g webpack

entry 入口文件 让webpack用哪个文件作为项目的入口
output 出口 让webpack把处理完成的文件放在哪里
module 模块 要用什么不同的模块来处理各种类型的文件

mkdir webpack
cd webpack
npm init

npm install html-webpack-plugin --save-dev 快速的帮我们生成HTML

npm install webpack-dev-server --save-dev 自动刷新浏览器

npm install css-loader style-loader --save-dev
css-loader 和 style－loader，css-loader会遍历css文件，找到所有的url(...)并且处理。style-loader会把所有的样式插入到你页面的一个style tag中。
