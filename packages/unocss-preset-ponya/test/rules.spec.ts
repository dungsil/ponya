import { describe, test, expect, it } from 'vitest'
import { createGenerator } from 'unocss'
import { presetPonya } from '../src'

const uno = createGenerator({
  // @ts-ignore
  presets: [presetPonya()]
})

describe('Layouts', () => {
  // wh
  test('width - length', async () => await matches(['w1', 'w100p', 'w100px']))
  test('width - keyword', async () => await matches(['w-none', 'w-auto', 'w-inherit', 'w-initial']))
  test('height - length', async () => await matches(['h1', 'h100p', 'h100vh']))
  test('height - keyword', async () => await matches(['h-none', 'h-auto', 'h-inherit', 'h-initial']))

  // wh - minOrMax
  test('min-width - length', async () => await matches(['w~1', 'w~10rem', 'w~100p']))
  test('min-width - keyword', async () => await matches(['w~auto', 'w~none', 'w~inherit', 'w~initial']))
  test('max-width - length', async () => await matches(['w1~', 'w10rem~', 'w100p~']))
  test('max-width - keyword', async () => await matches(['w-auto~', 'w-none~', 'w-inherit~', 'w-initial~']))
  test('min-height - length', async () => await matches(['h~1', 'h~10rem', 'h~100p']))
  test('min-height - keyword', async () => await matches(['h~auto', 'h~none', 'h~inherit', 'h~initial']))
  test('max-height - length', async () => await matches(['h1~', 'h10rem~', 'h100p~']))
  test('max-height - keyword', async () => await matches(['h-auto~', 'h-none~', 'h-inherit~', 'h-initial~']))

  // wb - minAndMax
  test('min/max-width', async () => await matches(['w1~2', 'w10p~20', 'w10~20p', 'w1rem~100p']))
  test('min/max-height', async () => await matches(['h1~2', 'h10p~20', 'h10~20p', 'h1rem~100p']))

  // mb
  test('margin', async () => await matches(['m1', 'm10p', 'm10px', 'ml-auto', 'mb1vh', 'mt2', 'mr-none', 'mx-auto']))
  test('padding', async () => await matches(['p1', 'p10p', 'p10px', 'pl-auto', 'pb1vh', 'pt2', 'pr-none', 'py0']))
})

async function matches(selectors: string[]) {
  const { matched, css } = await uno.generate(selectors.join(' '), { preflights: false })

  expect(Array.from(matched)).toEqual(selectors)
  expect(css).toMatchSnapshot()
}
