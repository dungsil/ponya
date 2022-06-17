import { type Rule, type DynamicMatcher} from '@unocss/core'

const cssKey: Record<string, string> = {
  w: 'width',
  h: 'height',
}

function cssUnit(unit: string = ''): string {
  switch (unit) {
    case undefined:
    case '':
      return 'px'
    case 'p':
      return '%'
    default:
      return unit
  }
}

export const rules: Rule<{}>[] = [
  // `width`, `height`를 정의한다.
  [
    /^([wh])(~)?(\d+)((?=[^~])[a-z]+)?(~(\d+)?([a-z]+)?)?$/,
    ([, wh, min, value, unit, max, maxVal, maxUnit]) => {
      // 이게 존재하면 min, max가 동시에 존재하는 경우로 범위 너비/높이를 지정하는 상황임
      if (maxVal) {
        return {
          [`min-${cssKey[wh]}`]: `${value}${cssUnit(unit)}`,
          [`max-${cssKey[wh]}`]: `${maxVal}${cssUnit(maxUnit)}`,
        }
      }

      // 프리픽스 추가
      let minOrMax = ''

      if (min) {
        return 'min-'
      }
      if (max) {
        return 'max-'
      }

      return {
        [`${minOrMax}${cssKey[wh]}`]: `${value}${cssUnit(unit)}`,
      }
    }
  ],
]
