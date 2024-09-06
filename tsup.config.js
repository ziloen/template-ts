import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'dist',
  bundle: true,
  minify: true,
  dts: true,
  format: ['esm'],
  platform: 'node',
  treeshake: true,
  skipNodeModulesBundle: true,
  sourcemap: false,
  clean: true,
})