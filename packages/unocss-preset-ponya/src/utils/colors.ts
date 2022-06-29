import { PaletteName, Theme } from '../theme'

export function colorResolver(theme: Theme, name: PaletteName | string) {
  let color = name

  if (name as PaletteName) {
    const paletteAndColor = name.split('-')
    const colorKey = (paletteAndColor?.[1] ?? '500') as unknown as number

    color = theme.palette?.[paletteAndColor[0]]?.[colorKey]
  }

  return color
}
