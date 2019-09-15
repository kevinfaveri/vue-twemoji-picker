const productionConfig = {
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    }
  },
}

module.exports = {
  publicPath: '/cool-emoji-picker/',
  css: { extract: false },
  runtimeCompiler: true,
  productionSourceMap: false,
  configureWebpack: config => {
    
    return productionConfig;
  },
  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: process.env.IS_BUILD_TEST === 'true' ? true : false,
    }
  }
}
