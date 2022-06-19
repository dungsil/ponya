import { resolve } from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import unocss from 'unocss/vite'
import { presetPonya } from 'unocss-preset-ponya'

export default defineConfig({
  plugins: [
    vue(),
    unocss({ presets: [presetPonya()] })
  ],
})
