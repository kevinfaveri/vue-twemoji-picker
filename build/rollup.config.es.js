import base from './rollup.config.base';

const config = Object.assign({}, base, {
  output: {
      name: 'cool-emoji-picker',
      file: 'dist/cool-emoji-picker.esm.js',
      format: 'es',
  },
  external: ['twemoji', 'v-tooltip', 'vue'],
});

export default config;
