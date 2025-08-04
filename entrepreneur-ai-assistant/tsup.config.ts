import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  external: ['react', 'react-dom', '@copilotkit/react-ui', '@copilotkit/react-core'],
  noExternal: [],
  splitting: false,
  treeshake: true,
  clean: true,
  bundle: true,
})
