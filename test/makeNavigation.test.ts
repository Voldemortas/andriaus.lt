import {describe, expect, test} from 'bun:test'
import makeNavigation from 'test/makeNavigation.ts'

describe('makeNavigation', () => {
  test('makes all params but text prefixed with `/`', () => {
    expect(makeNavigation('foo')).toEqual({
      links: [{text: 'foo', link: '/foo', key: '/foo'}],
      selected: '/foo',
    })
  })
})
