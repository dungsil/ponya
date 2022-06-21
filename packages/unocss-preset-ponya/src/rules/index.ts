import type { Rule } from '@unocss/core'
import type { Theme } from '../theme'
import { wh, minOrMaxWh, minMaxWh, mb, mbXy, display, flexDirections } from './layouts'


export const rules: Rule<Theme>[] = [
  // Layouts
  display,
  flexDirections,

  wh, minOrMaxWh, minMaxWh,
  mb, mbXy,

  // Typography
]
