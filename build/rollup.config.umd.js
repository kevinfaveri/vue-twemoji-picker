import base from './rollup.config.base';

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name: 'VueTwemojiPicker',
    file: 'dist/vue-twemoji-picker.umd.js',
    format: 'umd'
  },
  external: ['vue']
});

export default config;
