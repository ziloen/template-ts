import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'dist',
  dts: true,
  format: ['esm'],
  platform: 'node',
  treeshake: true,
  skipNodeModulesBundle: true,
  sourcemap: false,
  clean: true,
})