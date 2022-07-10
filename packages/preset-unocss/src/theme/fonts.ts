import { Theme, theme as mini } from '@unocss/preset-mini'

export const fontFamily: Theme['fontFamily'] = {
  ...mini.fontFamily,
  sans: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif'
}

export const fontSize: Theme['fontSize'] = {
  ui: ['1rem', '0'],
  base: ['1.125rem', '0.05555rem'],

  title: ['2.25rm', '2.5rem'],
  sub: ['0.875rem', '1']
}

