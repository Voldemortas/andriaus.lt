import {afterEach, describe, expect, it, mock, spyOn} from 'bun:test'
import isProd from 'back/pages/common/isProd.ts'
import * as getBunEnv from 'back/common/getBunEnv.ts'
import * as getConfigVar from 'back/common/getConfigVar.ts'

describe('isProd', () => {
  afterEach(() => {
    mock.restore()
  })
  it('returns true if NODE_ENV=production', () => {
    spyOn(getBunEnv, 'default').mockReturnValue({NODE_ENV: 'production'})
    expect(isProd()).toBeTrue()
  })
  it('returns true if PRODUCTION=true', () => {
    const getConfigVarMock = mock().mockReturnValue('true')
    spyOn(getConfigVar, 'default').mockImplementation(getConfigVarMock)
    expect(isProd()).toBeTrue()
    expect(getConfigVarMock).toHaveBeenCalledWith('PRODUCTION')
  })
  it('returns false by default', () => {
    expect(isProd()).toBeFalse()
  })
})
