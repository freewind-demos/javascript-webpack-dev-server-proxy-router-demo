module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  devServer: {
    proxy: {
      '/data.json': {
        target: 'http://localhost:34893',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^': '/static-server'
        },
        logLevel: 'debug'
      },
    }
  }
}
