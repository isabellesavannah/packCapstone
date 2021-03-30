module.exports = {
  // NOTE to host on github publicPath: '/YOUR-GITHUB-REPOSITORY-NAME/',
  publicPath: '/',
  outputDir: 'docs',
  productionSourceMap: false,
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 10240 }))
  }
}
