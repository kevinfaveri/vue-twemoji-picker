module.exports = {
  publicPath: '/',
  css: { extract: false },
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  }
};
