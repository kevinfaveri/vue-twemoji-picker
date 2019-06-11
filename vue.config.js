const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

function resolve (dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: '/cool-emoji-picker/',
  runtimeCompiler: true,
  productionSourceMap: false,
  configureWebpack: config => {
    if (process.env.IS_BUILD_TEST === 'true') {
      productionConfig.plugins.push(new BundleAnalyzerPlugin);
      return productionConfig;
    } else {
      return productionConfig;
    }
  }
}

const productionConfig = {
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    }
  },
  plugins: []
}