import typescript from '@rollup/plugin-typescript';

/**
 * @type {import('rollup').RollupOptions}
*/
const options = {
  input: "index.ts",
  plugins: [typescript()],
  output: {
    file: "dist/rollup/bundle.js",
    format: "es",
    sourcemap: true
  }
}

export default options;