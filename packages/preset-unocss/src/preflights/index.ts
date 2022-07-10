import type { Preflight } from '@unocss/core'
import { Theme } from '@unocss/preset-mini'

// noinspection CssUnknownProperty
export const preflights: Preflight<Theme>[] = [
  {
    layer: 'preflights',
    // language=CSS
    getCSS: ({ theme }) => `
        :root {
            
        }
    `
  }
]
