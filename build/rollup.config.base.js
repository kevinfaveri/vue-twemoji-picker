import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import vue from 'rollup-plugin-vue';
import cjs from '@rollup/plugin-commonjs';
import autoprefixer from 'autoprefixer';
import image from '@rollup/plugin-image';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import replace from '@rollup/plugin-replace';

const extensions = ['.js', '.jsx', '.ts', '.tsx', '.vue'];

export default {
  input: 'src/wrapper.ts',
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
      extensions,
      preferBuiltins: false,
    }),
    image(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    vue({
      css: true,
      compileTemplate: true,
      style: {
        postcssPlugins: [autoprefixer],
      },
    }),
    postcss({
      plugins: [autoprefixer],
    }),
    typescript(),
    cjs(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
      extensions,
      presets: [
        [
          '@vue/cli-plugin-babel/preset',
          {
            useBuiltIns: false,
            polyfills: false,
          },
        ],
        'babel-preset-typescript-vue',
      ],
    }),
  ],
};
