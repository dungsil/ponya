import { type Preset } from 'unocss'

import { theme, type Theme } from './theme'
import { preflights } from './preflights'
import { rules } from './rules'

/**
 * Fairytale preset
 */
export function presetFairytale(): Preset<Theme> {

  return {
    name: 'unocss-preset-fairytale',
    theme,
    preflights,
    rules,
  }
}
