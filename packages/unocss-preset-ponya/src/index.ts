import { type Preset } from 'unocss'

import { theme, type Theme } from './theme'
import { preflights } from './preflights'
import { rules } from './rules'

/**
 * Ponya preset
 */
export function presetPonya(): Preset<Theme> {

  return {
    name: 'unocss-preset-ponya',
    theme,
    preflights,
    rules,
  }
}
