import { type Preset } from 'unocss'
import { rules } from './rules'

/**
 * Fairytale preset
 */
export function presetFairytale(): Preset {

  return {
    name: 'unocss-preset-fairytale',
    rules,
  }
}
