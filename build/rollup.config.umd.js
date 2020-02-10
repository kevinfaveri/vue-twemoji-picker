import base from './rollup.config.base';

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name: 'twemoji-picker',
    file: 'dist/twemoji-picker.umd.js',
    format: 'umd'
  },
  external: ['vue']
});

export default config;
