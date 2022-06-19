export type PaletteName = `${keyof Palette}-${keyof PaletteColor}`

export interface PaletteColor extends Record<number, string> {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
}

export interface Palette extends Record<string, string | PaletteColor> {
  white: PaletteName | string,
  black: PaletteName | string,

  // Open color v1.9.1
  gray: PaletteColor
  red: PaletteColor
  pink: PaletteColor
  grape: PaletteColor
  violet: PaletteColor
  indigo: PaletteColor
  blue: PaletteColor
  cyan: PaletteColor
  teal: PaletteColor
  green: PaletteColor
  lime: PaletteColor
  yellow: PaletteColor
  orange: PaletteColor
}

export interface Theme {
  base: {
    font: {
      family: keyof Theme['font']['family'],
      size: keyof Theme['font']['size'],
      weight: keyof Theme['font']['weight'],
      color: PaletteName | string,
    }
  },

  palette: Palette,
  font: {
    family: {
      sans: string
      serif: string
      mono: string
    },
    size: Record<string, string>
    weight: Record<string, number>
  }
}
