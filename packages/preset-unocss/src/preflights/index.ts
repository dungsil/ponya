import type { Preflight } from '@unocss/core'
import { Theme } from '@unocss/preset-mini'

export const preflights: Preflight<Theme>[] = [
  {
    layer: 'preflights',
    // @ts-ignore
    getCSS: async () => await import('@ponya-ui/normalize')
  }
]
