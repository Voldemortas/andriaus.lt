import {describe, expect, it, mock} from 'bun:test'
import config, {getPage} from 'src/pages.ts'

describe('src/pages', () => {
  it('has no duplicate paths in config', () => {
    const configPaths = config.map(({path}) => path)
    const configSet = new Set(configPaths)
    expect(configSet.size).toStrictEqual(configPaths.length)
  })
  it('returns undefined if config is empty', () => {
    const page = getPage(new Request('https://example.com/one'), 'react', [])
    expect(page).toBeUndefined()
  })
  it('returns undefined if path+type is missing in config', () => {
    const conf = [
      {
        path: '/one',
        params: [],
        resolve: {
          type: 'back',
          resolver: mock(),
        },
      },
    ] as typeof config
    const page = getPage(new Request('https://example.com/one'), 'react', conf)
    expect(page).toBeUndefined()
  })
})
