import base from './rollup.config.base';
import { terser } from 'rollup-plugin-terser';
import analyze from 'rollup-plugin-analyzer';
import visualizer from 'rollup-plugin-visualizer';

const globals = {};
globals['vue'] = 'Vue';
globals['vue-clickaway'] = 'vueClickaway';
globals['twemoji'] = 'Twwemoji';
globals['@popperjs/core'] = '@popperjs/core';

const config = Object.assign({}, base, {
  output: {
    name: 'VueTwemojiPicker',
    file: 'dist/vue-twemoji-picker.esm.min.js',
    format: 'es'
  },
  external: ['vue', 'vue-clickaway', 'twemoji', '@popperjs/core', 'lodash.pick']
});

config.plugins.push(analyze());
config.plugins.push(terser());
config.plugins.push(visualizer());

export default config;
