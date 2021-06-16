import strip from '@rollup/plugin-strip';
export default {
  input: './src/app.js',
  output: {
    file: './dist/bundle.js',
    format: 'esm',
  },
  plugins: [strip({ functions: ['console.*'] })],
  // treeshake: false,
};
