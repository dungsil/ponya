import { expect } from 'vitest'
import { createGenerator } from 'unocss'
import { presetPonya } from '../src'

export const uno = createGenerator({
  presets: [presetPonya()]
})

export async function matches(selectors: string[]) {
  const { matched, css } = await uno.generate(selectors.join(' '), { preflights: false })

  expect(Array.from(matched)).toEqual(selectors)
  expect(css).toMatchSnapshot()
}
