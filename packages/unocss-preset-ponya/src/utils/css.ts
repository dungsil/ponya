const cssKeys: Record<string, string> = {
  w: 'width',
  h: 'height',

  m: 'margin',
  mt: 'margin-top',
  mr: 'margin-right',
  mb: 'margin-bottom',
  ml: 'margin-left',

  p: 'padding',
  pt: 'padding-top',
  pr: 'padding-right',
  pb: 'padding-bottom',
  pl: 'padding-left',
}

const cssUnits: Record<string, string> = {
  p: '%'
}

export function getKey(key: string): string {
  return cssKeys[key]
}

export function getValue(value?: string, unit?: string): string {

  if (!value) {
    return ''
  }

  if (value === '0') {
    return '0'
  }

  if (!unit) {
    return (Number.parseInt(value) * 4) + 'px'
  }

  return value + (cssUnits[unit] ?? unit)
}

export function minOrMax(min?: string, max?: string): string {
  return min ? 'min-' : max ? 'max-' : ''
}
