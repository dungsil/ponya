import type { Rule } from '@unocss/core'
import type { Theme } from '../theme'
import { getKey, getValue, minOrMax } from '../utils'

export const display: Rule<Theme> = [
  /(none|flex|grid|block|table-row|table|list-item|inline-block|inline-flex|inline-grid|inline)/,
  ([, display]) => ({ display })
]

export const flexDirections: Rule<Theme> = [
  /^flex-(row|col)$/,
  ([, direction]) => ({ 'flex-direction': direction })
]

/**
 * `width`, `height`
 */
export const wh: Rule<Theme> = [
  /^([wh])(?:-(auto|inherit|initial|none))?(?:(\d+)([a-z]+)?(~)?)?$/,
  ([, wh, keyword,  value, unit]) => {
    const key = getKey(wh)

    return {
      [key]: keyword ?? getValue(value, unit),
    }
  }
]

/**
 * `min-width`, `min-height`, `max-width`, `max-height`
 */
export const minOrMaxWh: Rule<Theme> = [
  /^([wh])(~)?-?(?:(\d+)([a-z]+)?|(auto|inherit|initial|none))(~)?$/,
  ([, wh, max, value, unit, keyword, min]) => {
    return {
      [minOrMax(min, max) + getKey(wh)]: keyword ?? getValue(value, unit),
    }
  }
]

/**
 * `min-width` ~ `max-width`,
 * `min-height` ~ `max-height`
 */
export const minMaxWh: Rule<Theme> = [
  /^([wh])(?:(\d+)([a-z]+)?)~(?:(\d+)([a-z]+)?)$/,
  ([, wh, minVal, minUnit, maxVal, maxUnit]) => {
    const key = getKey(wh)

    return {
      [`min-${key}`]: getValue(minVal, minUnit),
      [`max-${key}`]: getValue(maxVal, maxUnit),
    }
  }
]

/**
 * `margin`, `padding`
 */
export const mb: Rule<Theme> = [
  /^([mp][trbl]?)-?(?:(\d+)([a-z]+)?|(auto|inherit|initial|none))$/,
  ([, mp, value, unit, keyword]) => {
    return { [getKey(mp)]: keyword ?? getValue(value, unit) }
  }
]

/**
 * mx, my, px, py 설정
 */
export const mbXy: Rule<Theme> = [
  /^([mp])([xy])-?(?:(\d+)([a-z]+)?|(auto|inherit|initial|none))$/,
  ([, mp, xy, value, unit, keyword]) => {
    const key = getKey(mp)

    switch (xy) {
      case 'x':
        return {
          [`${key}-left`]: keyword ?? getValue(value, unit),
          [`${key}-right`]: keyword ?? getValue(value, unit),
        }
      case 'y':
        return {
          [`${key}-top`]: keyword ?? getValue(value, unit),
          [`${key}-bottom`]: keyword ?? getValue(value, unit),
        }
    }
  }
]
