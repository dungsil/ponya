import { describe, expect, test } from 'vitest'
import { uno } from './utiles'

test('Generate preflights', async () => {
  const { css  } = await uno.generate('ss', { preflights: true })
  expect(css).toMatchSnapshot()
})
