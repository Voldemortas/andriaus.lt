import {mock} from 'bun:test'

/**
 * Due to an issue with Bun (https://github.com/oven-sh/bun/issues/7823), we need to manually restore mocked modules
 * after we're done. We do this by setting the mocked value to the original module.
 *
 * When setting up a test that will mock a module, the block should add this:
 * const moduleMocker = new ModuleMocker()
 *
 * afterEach(() => {
 *   moduleMocker.clear()
 * })
 *
 * When a test mocks a module, it should do it this way:
 *
 * await moduleMocker.mock('@/services/token.ts', () => ({
 *   getBucketToken: mock(() => {
 *     throw new Error('Unexpected error')
 *   })
 * }))
 *
 */
export type MockResult = {
  clear: () => void
}

export class ModuleMocker {
  private mocks: MockResult[] = []

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  async mock(modulePath: string, renderMocks: () => Record<string, any>) {
    // biome-ignore lint/style/useConst: <explanation>
    let original = {
      ...(await import(modulePath)),
    }
    // biome-ignore lint/style/useConst: <explanation>
    let mocks = renderMocks()
    // biome-ignore lint/style/useConst: <explanation>
    let result = {
      ...original,
      ...mocks,
    }
    mock.module(modulePath, () => result)

    this.mocks.push({
      clear: () => {
        mock.module(modulePath, () => original)
      },
    })
  }

  clear() {
    // biome-ignore lint/complexity/noForEach: <explanation>
    this.mocks.forEach((mockResult) => mockResult.clear())
    this.mocks = []
  }
}
