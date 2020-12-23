module.exports = {
  devServer:{
    host:'localhost', // 主机
    port:8080,  // 端口
    proxy:{  // 代理
      '/api':{
        target: 'https://www.imooc.com',
        changeOrigin: true,  // 是否将主机头的圆点更改为url地址
        pathRewrite:{  // 转化地址
          '/api':'/api'
        }
      }
    }
  }
}