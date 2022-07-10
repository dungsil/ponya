import { theme as mini } from '@unocss/preset-mini'
import { colors } from './colors'
import { fontFamily, fontSize } from './fonts'

// Override
mini.fontFamily = fontFamily
mini.fontSize = fontSize
mini.colors = colors

export const theme = mini
