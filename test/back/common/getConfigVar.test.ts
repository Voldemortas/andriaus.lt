import {afterEach, describe, expect, mock, test} from 'bun:test'
import getConfigVar, {getConfigVars} from 'back/common/getConfigVar.ts'

describe('getConfigVar file', () => {
  describe('getConfigVar', () => {
    afterEach(() => {
      mockParseArgs(() => undefined)
      mockEnv({})
      mockBunArgv([])
    })
    test('best day from argv', () => {
      makeBestDay('Tuesday')
      mockEnv({bestDay: 'Wednesday'})
      expect(getConfigVar('bestDay', 'Next day')).toBe('Tuesday')
    })
    test('best day from env', () => {
      mockEnv({bestDay: 'Wednesday'})
      expect(getConfigVar('bestDay', 'Next day')).toBe('Wednesday')
    })
    test('best day from default', () => {
      expect(getConfigVar('bestDay', 'Next day')).toBe('Next day')
    })
    test('best day when empty gives undefined', () => {
      expect(getConfigVar('bestDay')).toBeUndefined()
    })
  })
  describe('getConfigVars', () => {
    afterEach(() => {
      mockParseArgs(() => undefined)
      mockEnv({})
      mockBunArgv([])
    })
    test('concat argv, env and defaults', () => {
      makeBestDay('Tuesday')
      mockEnv({bestMonth: 'February'})
      expect(getConfigVars({bestHour: 'this'})).toEqual({
        bestDay: 'Tuesday',
        bestMonth: 'February',
        bestHour: 'this',
      })
    })
    test('when argv, env and default are present return argv', () => {
      makeBestDay('Tuesday')
      mockEnv({bestDay: 'Wednesday'})
      expect(getConfigVars({bestDay: 'Tomorrow'})).toStrictEqual({
        bestDay: 'Tuesday',
      })
    })
    test('when env and default are present return env', () => {
      mockEnv({bestDay: 'Wednesday'})
      expect(getConfigVars({bestDay: 'Tomorrow'})).toStrictEqual({
        bestDay: 'Wednesday',
      })
    })
    test('when only default is present return default', () => {
      expect(getConfigVars({bestDay: 'Tomorrow'})).toStrictEqual({
        bestDay: 'Tomorrow',
      })
    })
    test('when nothing is present return emptyy object', () => {
      expect(getConfigVars()).toStrictEqual({})
    })
  })
})

function makeBestDay(bestDay: string) {
  mockParseArgs((param: string) => {
    if (param === 'bestDay') {
      return bestDay
    }
    return undefined
  })
  mockBunArgv([`--bestDay=${bestDay}`])
}

function mockParseArgs(implFn: (param: string) => string | undefined) {
  mock.module('back/common/parseArgs.ts', () => ({
    default: implFn,
  }))
}

function mockEnv(value: {[key: string]: string}): void {
  mock.module('back/common/getBunEnv.ts', () => ({
    default: () => value,
  }))
}

function mockBunArgv(value: string[]): void {
  Object.defineProperty(Bun, 'argv', {
    value,
  })
}
