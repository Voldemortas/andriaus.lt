import {expect} from 'bun:test'

export default function assertHeaders(
  response: Response,
  headers: Record<string, string>
) {
  let headersFound = 0
  response.headers.forEach((value, key) => {
    //@ts-ignore
    expect(headers[key]).toBe(value)
    headersFound++
  })
  expect(headersFound).toStrictEqual(Object.keys(headers).length)
}
