import { type Rule, type DynamicMatcher} from '@unocss/core'

const cssKey: Record<string, string> = {
  w: 'width',
  h: 'height'
}

function cssUnit(unit: string, wh: string): string {
  switch (unit) {
    case 'p':
      return '%'
    case 'v':
      return 'v' + wh
    default:
      return 'px'
  }
}

function prefix(min?: string, max?: string, maxVal?: string) {
  if (min) {
    return 'min-'
  }

  if (max) {
    return 'max-'
  }

  return ''
}

export const rules: Rule<{}>[] = [
  // `width`, `height`, `min-width`, `min-height`, `max-width`, `max-height`를 정의한다.
  [
    /^([wh])(~)?(\d+)([pv])?(~)?(?:(\d+)([p|v])?)?$/,
    ([, wh, min, value, unit, max, maxVal, maxUnit]) => {

      // 이게 존재하면 min, max가 동시에 존재하는 경우로 범위 너비/높이를 지정하는 상황임
      if (maxVal) {
        return {
          [`min-${cssKey[wh]}`]: `${value}${cssUnit(unit, wh)}`,
          [`max-${cssKey[wh]}`]: `${maxVal}${cssUnit(maxUnit, wh)}`,
        }
      }

      return {
        [`${prefix(min, max)}${cssKey[wh]}`]: `${value}${cssUnit(unit, wh)}`,
      }
    }
  ]
]
