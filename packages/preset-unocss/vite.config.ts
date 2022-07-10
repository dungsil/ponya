import { resolve } from 'path'

import { defineConfig } from 'vite'
import unocss from 'unocss/vite'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'cjs' ? 'cjs' : 'mjs'}`
    },
    rollupOptions: {
      external: ['unocss']
    }
  },
})
