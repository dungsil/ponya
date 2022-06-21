import { describe, test, expect } from 'vitest'
import { createGenerator } from 'unocss'
import { presetPonya } from '../src'

const uno = createGenerator({
  // @ts-ignore
  presets: [presetPonya()]
})

describe('preflights', () => {
  test('generate test', async () => {
    const {css} = await uno.generate('', { preflights: true })
    expect(css).toMatchSnapshot()
  })
})
