import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import postcss from 'rollup-plugin-postcss';
import simplevars from 'postcss-simple-vars';
import nested from 'postcss-nested';
import cssnext from 'postcss-cssnext';
import cssnano from 'cssnano';
import json from '@rollup/plugin-json';
import postcssModules from 'postcss-modules';
import { uglify } from 'rollup-plugin-uglify';
import { appId } from './package.json';

if (!appId || (process.env.NODE_ENV === 'production' && appId === "template")) {
  throw new Error("Укажите уникальный 'appId' в package.json !");
}

const generateScopedName = (name, filename, css) => {
  return `${appId} .${name}`;
};

export default {
  input: './src/index.js',
  output: [
    {
      dir: "public/nomodule",
      format: "system",
      sourcemap: false
    }
  ],
  plugins: [
    json(),
    postcss({
      plugins: [
        postcssModules({
          generateScopedName,
          getJSON: () => {}
        }),
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
    nodeResolve({ jsnext: true, preferBuiltins: true, browser: true }),
    commonjs({ include: /node_modules/ }),
    (process.env.NODE_ENV === 'production' && uglify())
  ],
};
