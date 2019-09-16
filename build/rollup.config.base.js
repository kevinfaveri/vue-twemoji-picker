import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import vue from 'rollup-plugin-vue';
import cjs from 'rollup-plugin-commonjs';
import autoprefixer from 'autoprefixer';
import image from 'rollup-plugin-image';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/wrapper.js',
  plugins: [
    image(),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    vue({
      css: true,
      compileTemplate: true,
      style: {
        postcssPlugins: [autoprefixer],
      },
    }),
    postcss({
      plugins: [autoprefixer]
    }),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
    }),
    cjs(),
  ],
};
