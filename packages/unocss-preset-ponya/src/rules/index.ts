import type { Rule } from '@unocss/core'
import type { PaletteName, Theme } from '../theme'

const cssKey: Record<string, string> = {
  w: 'width',
  h: 'height',
  m: 'margin',
  p: 'padding',
  b: 'border',
  bg: 'background-color',
  c: 'color',
}

const cssPositions: Record<string, string> = {
  t: 'top',
  r: 'right',
  b: 'bottom',
  l: 'left',
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

function colorResolver(theme: Theme, name: PaletteName | string) {
  let color = name

  if (name as PaletteName) {
    const paletteAndColor = name.split('-')
    const colorKey = (paletteAndColor[1] ?? '500') as unknown as number

    color = theme.palette?.[paletteAndColor[0]][colorKey]
  }

  return color
}

export const rules: Rule<Theme>[] = [
  // `background-color` 및 `text-color`를 정의한다.
  [
    /^(bg|c)-(.+)$/,
    ([, type, value], { theme }) => ({ [cssKey[type]]: colorResolver(theme, value) })
  ],

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
        minOrMax = 'min-'
      }
      if (max) {
        minOrMax = 'max-'
      }

      return {
        [`${minOrMax}${cssKey[wh]}`]: `${value}${cssUnit(unit)}`,
      }
    }
  ],
  // `margin`, `padding`를 정의한다.
  [
    /^([mp])([trblxy])?(\d+)?$/,
    ([, mp, position, value]) => {
      const suffix = cssPositions[position] ? `-${cssPositions[position]}` : ''

      return {
        [`${cssKey[mp]}${suffix}`]: value ? value + cssUnit() : '1px',
      }
    }
  ],
  // `border-width`를 정의한다.
  [
    /^b([trblxy])?(\d+)?$/,
    ([, position, value]) => {
      const suffix = cssPositions[position] ? `-${cssPositions[position]}` : ''

      return {
        [`border${suffix}-width`]: value ? value + cssUnit() : '1px',
      }
    }
  ],
  // 키워드 `auto`를 정의한다.
  // 적용대상: `width`, `height`, `margin`
  [
    /^(~)?([whm])(~)?$/,
    ([, min, key, max]) => {
      let name = cssKey[key]

      if (max) {
        name = 'max-' + name
      } else if (min) {
        name = 'min-' + name
      }

      return {
        [name]: 'auto',
      }
    }
  ],

  // `font-weight` 정의
  [
    /^font-(.+)$/,
    ([, weightOrSize], { theme }) => {
      let key = 'font-weight'
      let value = theme.font.weight[weightOrSize]

      if (!value) {
        key = 'font-size'
        value = theme.font.size[weightOrSize]
      }

      return {
        [key]: value
      }
    }
  ],

  // `font-family` 정의
  [
    /^font-(sans|serif|mono)$/,
    ([, family], { theme }) => ({ 'font-family': theme.font.family[family as 'sans' | 'serif' | 'mono'] })
  ],

  // display 정의
  [
    /(none|flex|grid|block|table-row|table|list-item|inline-block|inline-flex|inline-grid|inline)/,
    ([, display]) => ({ display })
  ]
]
