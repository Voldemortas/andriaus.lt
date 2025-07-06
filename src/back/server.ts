import pages, {getPage, type PageType, type RedirectType} from 'src/pages'
import renderReact from 'back/pages/common/renderReact'
import getUrl from 'back/pages/common/getUrl'
import IS_PROD from 'back/pages/common/isProd.ts'
import {getConfigVars} from 'back/common/getConfigVar.ts'
import logVisit from 'back/utils/logVisit.ts'
import FourOFour from 'back/common/fourOFour.ts'

const lastUpdated = new Date().getTime().toString()
const {HASH, PORT, HOSTNAME} = getConfigVars()

const server = Bun.serve({
  port: PORT,
  hostname: HOSTNAME,
  websocket: {
    async message(ws, message) {},
    async open(ws) {
      ws.send(lastUpdated)
    },
  },
  async fetch(request): Promise<Response | undefined> {
    if (!IS_PROD()) {
      const success = server.upgrade(request)
      if (success) {
        return undefined
      }
    }

    const {pathname} = getUrl(request)

    if (/^\/static\//.test(pathname)) {
      return serveStatic(request)
    }
    if (/^\/front\//.test(pathname)) {
      return serveStatic(request)
    }
    await logVisit(request, server)
    for (const page of pages) {
      if (page.path === pathname) {
        if (page.resolve.type === 'redirect') {
          return serveRedirect(request)
        }
        if (page.resolve.type === 'back') {
          return page.resolve.resolver(request, page.params)
        }
        if (page.resolve.type === 'react') {
          return renderReact(request, HASH ?? lastUpdated)
        }
      }
    }

    return FourOFour()
  },
})

async function serveRedirect(request: Request) {
  const page = getPage(request, 'redirect') as PageType<RedirectType>
  return await serveStatic(request, page.resolve.path, page.params)
}

async function serveStatic(
  request: Request,
  staticPath?: string,
  params: string[] = []
) {
  const {pathname, searchParams} = getUrl(request)
  const file = Bun.file(`out${staticPath ?? pathname}`)
  if (!(await file.exists())) {
    return await FourOFour()
  }
  const headers = getHeadersForRedirect(params, getCacheDuration(request))
  return new Response(file, headers)
}

function getHeadersForRedirect(
  params: string[],
  cacheDuration = 0
): ResponseInit {
  const cache = {
    'Cache-Control': `max-age=${cacheDuration}`,
  }
  if (params.length === 0) {
    return {
      headers: cache,
    }
  }
  if (params.length === 2) {
    if (params[0] === 'headers' && !!params[1]) {
      return {headers: {...cache, ...JSON.parse(params[1])}}
    }
  }
  return {
    headers: cache,
  }
}

function getCacheDuration(request: Request) {
  const WEEK = 604800
  const MONTH = 2592000
  const HOUR = 3600
  const {pathname, searchParams} = getUrl(request)
  if (searchParams.get('hash') === HASH) {
    return MONTH
  }
  if (searchParams.get('hash') === lastUpdated) {
    return HOUR
  }
  if (/^\/static\//.test(pathname)) {
    return WEEK
  }
  if (/^\/front\/chunk-/.test(pathname)) {
    return MONTH
  }
  if (pathname === '/favicon.ico') {
    return MONTH
  }
  return 0
}

console.log(`Listening on ${server.url}`)
