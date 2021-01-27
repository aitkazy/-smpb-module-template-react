import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import postcss from 'rollup-plugin-postcss';
import simplevars from 'postcss-simple-vars';
import nested from 'postcss-nested';
import cssnext from 'postcss-cssnext';
import cssnano from 'cssnano';

export default {
  input: './src/index.js',
  output: [
    {
      dir: "public/module",
      format: "es",
      sourcemap: false
    }
  ],
  plugins: [
    postcss({
      plugins: [
        simplevars(),
        nested(),
        cssnext(),
        cssnano()
      ],
      extensions: ['.css']
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify( 'production' )
    }),
    babel({ 
      babelrc: true,
      exclude: 'node_modules/**',
      babelHelpers: "bundled"
    }),
    nodeResolve(),
    commonjs({ include: /node_modules/ })
  ],
};
