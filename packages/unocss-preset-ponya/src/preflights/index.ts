import type { Preflight } from '@unocss/core'
import type { Theme } from '../theme'
import { colorResolver } from '../utils'

// noinspection CssUnknownProperty
export const preflights: Preflight<Theme>[] = [
  {
    layer: 'preflights',
    // language=CSS
    getCSS: ({ theme }) =>  `
html[data-color-scheme="auto"] {
    color-scheme: normal;    
}
html[data-color-scheme="light"] {
    color-scheme: light;
}
html[data-color-scheme="dark"] {
    color-scheme: dark;
}

body {
  font-family: ${theme.font.family[theme.base.font.family]};
  font-weight: ${theme.font.weight[theme.base.font.weight]};
  font-size: ${theme.font.size[theme.base.font.size]};
  line-height: ${theme.lineHeight[theme.base.lineHeight]};
  letter-spacing: ${theme.letterSpacing[theme.base.letterSpacing]};
  color: ${colorResolver(theme, theme.base.font.color)};
}
    `
  }
]
