export default function getUrl(request: Request, strictHttp = false) {
  const url = new URL(request.url)
  const sub = url.hostname.split('.')[0]
  const pathname = url.pathname.replace(/\/+$/, '').replaceAll(/^(?:)$/g, '/')
  const href = url.href
  const origin = strictHttp
    ? url.origin.replace(/^http:/, 'https:')
    : url.origin
  const searchParams = url.searchParams

  return {sub, pathname, href, origin, searchParams}
}
