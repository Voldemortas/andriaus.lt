import {describe, expect, test} from 'bun:test'
import getBunEnv from 'back/common/getBunEnv.ts'

describe('getBunEnv', () => {
  test('env = env', () => {
    expect(JSON.stringify(Bun.env)).toStrictEqual(JSON.stringify(getBunEnv()))
  })
})
