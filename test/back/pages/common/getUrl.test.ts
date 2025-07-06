import {describe, expect, test} from 'bun:test'
import getUrl from 'back/pages/common/getUrl.ts'

const INDEX_LT = new Request('https://example.com')
const INDEX_EN = new Request('http://en.example.com')
const ROUTE = new Request(
  'http://lt.example.com/route?one=two&three=four'
)
const PAGE = new Request('https://en.example.com/page/')

describe('getUrl', () => {
  test('sub', () => {
    expect(getUrl(INDEX_LT).sub).toEqual('example')
    expect(getUrl(ROUTE).sub).toEqual('lt')
    expect(getUrl(INDEX_EN).sub).toEqual('en')
    expect(getUrl(PAGE).sub).toEqual('en')
  })
  test('pathname', () => {
    expect(getUrl(INDEX_LT).pathname).toEqual('/')
    expect(getUrl(ROUTE).pathname).toEqual('/route')
    expect(getUrl(INDEX_EN).pathname).toEqual('/')
    expect(getUrl(PAGE).pathname).toEqual('/page')
  })
  test('href', () => {
    expect(getUrl(INDEX_LT).href).toEqual('https://example.com/')
    expect(getUrl(ROUTE).href).toEqual(
      'http://lt.example.com/route?one=two&three=four'
    )
    expect(getUrl(INDEX_EN).href).toEqual('http://en.example.com/')
    expect(getUrl(PAGE).href).toEqual(
      'https://en.example.com/page/'
    )
  })
  test('origin', () => {
    expect(getUrl(INDEX_LT).origin).toEqual('https://example.com')
    expect(getUrl(ROUTE).origin).toEqual('http://lt.example.com')
    expect(getUrl(INDEX_EN).origin).toEqual('http://en.example.com')
    expect(getUrl(PAGE).origin).toEqual('https://en.example.com')
  })
  test('strict https origin', () => {
    expect(getUrl(INDEX_LT, true).origin).toEqual('https://example.com')
    expect(getUrl(ROUTE, true).origin).toEqual('https://lt.example.com')
    expect(getUrl(INDEX_EN, true).origin).toEqual('https://en.example.com')
    expect(getUrl(PAGE, true).origin).toEqual('https://en.example.com')
  })
  test('search params', () => {
    expect(getUrl(ROUTE).searchParams).toEqual(
      new URLSearchParams({one: 'two', three: 'four'})
    )
    expect(getUrl(PAGE).searchParams).toEqual(new URLSearchParams({}))
  })
})
