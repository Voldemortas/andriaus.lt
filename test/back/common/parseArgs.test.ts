import {afterAll, beforeAll, beforeEach, describe, expect, test} from 'bun:test'
import parseArgs from 'back/common/parseArgs.ts'
//TODO
describe('parseArgs', () => {
  let bunArgv: typeof Bun.argv
  beforeAll(() => {
    bunArgv = Bun.argv
  })
  afterAll(() => {
    mockBunArgv(bunArgv)
  })
  beforeEach(() => {
    mockBunArgv(['--one=a', '--two:b', '--three'])
  })
  test('test --one=a to be present', () => {
    expect(parseArgs('one')).toBe('a')
  })
  test('--two:b to be present', () => {
    expect(parseArgs('two', {delimiter: ':'})).toBe('b')
  })
  test('--three to be present', () => {
    expect(parseArgs('three', {isPlain: true})).toBe('three')
  })
  test('missing values to be undefined', () => {
    expect(parseArgs('four')).toBeUndefined()
    expect(parseArgs('four', {delimiter: ':'})).toBeUndefined()
    expect(parseArgs('four', {isPlain: true})).toBeUndefined()
  })
})

function mockBunArgv(value: string[]): void {
  Object.defineProperty(Bun, 'argv', {
    value,
  })
}
