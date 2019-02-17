var path = require('path')

module.exports = {
  // 配置入口文件
  entry: './src/app.js',
  // 配置输出文件
  output: {
    // 表示输出文件的路径
    path: path.join(__dirname, 'dist'),
    // 静态资源在服务器上运行时的访问路径，可以直接http://localhost:8080/dist/bundle.js访问到服务器中的bundle.js文件
    publicPath: '/dist',
    // 表示输出文件的名字
    filename: 'bundle.js'
  }
}