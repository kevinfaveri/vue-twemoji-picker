import base from './rollup.config.base';

const config = Object.assign({}, base, {
  output: {
    name: 'VueTwemojiPicker',
    file: 'dist/vue-twemoji-picker.esm.js',
    format: 'es'
  },
  external: ['twemoji', 'v-tooltip', 'vue']
});

export default config;
