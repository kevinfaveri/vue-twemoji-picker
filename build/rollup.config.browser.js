import base from './rollup.config.base';
import { terser } from 'rollup-plugin-terser';
import analyze from 'rollup-plugin-analyzer';
import visualizer from 'rollup-plugin-visualizer';

const globals = {};
globals['vue'] = 'Vue';

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name: 'VueTwemojiPicker',
    file: 'dist/vue-twemoji-picker.min.js',
    format: 'iife',
    globals
  },
  external: ['vue']
});

config.plugins.push(analyze());
config.plugins.push(terser());
config.plugins.push(visualizer());

export default config;
