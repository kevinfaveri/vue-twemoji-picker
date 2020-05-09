import base from './rollup.config.base';
import { terser } from 'rollup-plugin-terser';
import analyze from 'rollup-plugin-analyzer';
import visualizer from 'rollup-plugin-visualizer';

const globals = {};
globals['vue'] = 'Vue';

const config = Object.assign({}, base, {
  output: {
    name: 'VueTwemojiPicker',
    file: 'dist/vue-twemoji-picker.esm.min.js',
    format: 'es',
  },
  external: ['vue'],
});

config.plugins.push(analyze());
config.plugins.push(terser());
config.plugins.push(visualizer());

export default config;
