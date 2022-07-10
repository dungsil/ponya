import { describe, test } from 'vitest'
import { matches } from './utiles'


describe('Fonts', () => {
  describe('font family', () => {
    test('font-sans', async () => await matches(['font-sans']))
  })

  describe('font-size', () => {
    test('text-ui', async () => await matches(['text-ui']))
    test('text-base', async () => await matches(['text-base']))
    test('text-title', async () => await matches(['text-title']))
    test('text-sub', async () => await matches(['text-sub']))
  })
})
