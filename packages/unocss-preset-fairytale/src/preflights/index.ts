import type { Preflight } from '@unocss/core'
import type { FairytaleTheme } from '../themes'

// noinspection CssUnknownProperty
export const preflights: Preflight<FairytaleTheme>[] = [
  {
    layer: 'preflights',
    // language=CSS
    getCSS: () =>  `
      body {
          font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
          font-weight: 400;
          font-size: 1rem;
          line-height: 1.5;
          letter-spacing: 0.0625rem;
      }
    `
  }
]
