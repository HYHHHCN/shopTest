const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  // 代理跨域问题
  devServer: {
    proxy: {
      '/api': {
        target: 'http://gmall-h5-api.atguigu.cn/',
        // pathRewrite: {'^/api' : ''},
        // changeOrigin: true,     // target是域名的话，需要这个参数，
        // secure: false,          // 设置支持https协议的代理
      },
    }
  }
})
