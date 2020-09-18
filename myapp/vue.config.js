module.exports = {
  // publicPath: '/shenan',
  devServer: {
    // vue反向代理配置
    proxy: {
      '/ajax': {
        target: 'https://m.maoyan.com',
        // ws: true,
        changeOrigin: true
      },
      '/geo': {
        target: 'https://api.asilu.com',
        changeOrigin: true
      },
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  }
}
