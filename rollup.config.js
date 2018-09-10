import {terser} from 'rollup-plugin-terser';
import  copy  from 'rollup-plugin-copy';
export default {
  input: './src/js/app.js',
  output: {
    file: './build/js/bundle.js',
    format: 'iife'
  },
  plugins: [
    terser(),
    copy({
      'src/index.html' : 'build/index.html',
      'src/js/lib/' : 'build/js/lib/',
      'src/css/style.css' : 'build/css/style.css'
    })
  ]
};