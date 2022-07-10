import { type Preset, Rule } from 'unocss'
import { type Theme } from '@unocss/preset-mini'
import { rules } from '@unocss/preset-mini/rules'

import { theme } from './theme'

/**
 * Ponya preset
 */
export function presetPonya(): Preset<Theme> {


  return {
    name: '@ponya-ui/preset-unocss',
    theme,
    rules: [
      // base rules
      ...rules as Rule<Theme>[]
    ],
  }
}
