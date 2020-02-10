module.exports = {
  publicPath: '/vue-twemoji-picker/',
  css: { extract: false },
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  }
};
