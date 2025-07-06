import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  mock,
  spyOn,
} from 'bun:test'
import assertHeaders from 'test/back/assertHeaders.ts'
import renderReact from 'back/pages/common/renderReact.ts'
import {htmlHeaders} from 'back/common/responseHeaders.ts'
import * as Page from 'src/pages.ts'
import * as isProd from 'back/pages/common/isProd.ts'

const HASH = 'abc123'
const DEFAULT_PARAMS = {hello: 'world'}
const DEFAULT_REQUEST = new Request('https://example.com/test')

describe('renderReact', () => {
  beforeEach(() => {
    spyOn(isProd, 'default').mockReturnValue(true)
  })
  afterEach(() => {
    mock.restore()
  })

  it('correctly renders', async () => {
    const pageMock = mockGetPage()

    const response = await renderReact(DEFAULT_REQUEST, HASH)
    const responseText = await response.text()
    const expectedHtml = (
      await Bun.file(`${import.meta.dir}/default.html`).text()
    ).replace(`hello: 'world'`, `"hello":"world"`)

    expect(pageMock).toHaveBeenCalledWith(DEFAULT_REQUEST, 'react')
    expect(responseText).toEqualIgnoringWhitespace(expectedHtml)
    assertHeaders(response, htmlHeaders.headers)
  })
})

function mockGetPage() {
  const pageMock = mock().mockReturnValue({
    resolve: {
      path: 'test.ts',
      resolver: () => DEFAULT_PARAMS,
    },
  })
  return spyOn(Page, 'getPage').mockImplementation(pageMock)
}
