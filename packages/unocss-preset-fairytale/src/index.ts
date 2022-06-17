import { type Preset } from 'unocss'

import { type FairytaleTheme } from './themes'
import { preflights } from './preflights'
import { rules } from './rules'

/**
 * Fairytale preset
 */
export function presetFairytale(): Preset<FairytaleTheme> {

  return {
    name: 'unocss-preset-fairytale',
    preflights,
    rules,
  }
}
