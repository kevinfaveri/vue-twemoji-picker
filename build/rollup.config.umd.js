import base from './rollup.config.base';

const config = Object.assign({}, base, {
  output: {
      exports: 'named',
      name: 'cool-emoji-picker',
      file: 'dist/cool-emoji-picker.umd.js',
      format: 'umd',
  },
  external: ['vue'],
});

export default config;
