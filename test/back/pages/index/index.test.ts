import {describe, expect, mock, test} from 'bun:test'
import index from 'back/pages/index/index.ts'
import { spyOn } from 'bun:test'

const REQUEST = mock() as unknown as Request
const RANDOM_VALUE = 0.555

describe('pages/index/index', () => {
  test('returns Index page', () => {
    spyOn(global.Math, 'random').mockReturnValue(RANDOM_VALUE);
    const page = index(REQUEST, [])
    expect(page).toEqual(RANDOM_VALUE)
  })
})
