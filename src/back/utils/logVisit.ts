import {$, type Server} from 'bun'
import getUrl from 'back/pages/common/getUrl.ts'
import getTimestamp from 'back/common/timestamp.ts'

type ipApiType =
  | {
      status: 'success'
      query: string
      country: string
      message: never
    }
  | {
      status: 'fail'
      query: string
      country: never
      message: 'stroke'
    }

export default async function logVisit(req: Request, server: Server) {
  const pathName = getUrl(req).pathname
  if (pathName === '/installHook.js.map' || pathName === '/favicon.ico') {
    return
  }
  const timestamp = getTimestamp()
  let country = 'unknown'
  const ip = getIp(req, server)
  if (!!ip) {
    const fetchedIp = (await (
      await fetch(
        `http://ip-api.com/json/${ip}?fields=status,message,country,query`
      )
    ).json()) as ipApiType
    if (fetchedIp.status === 'success') {
      country = fetchedIp.country
    }
  }
  await $`mkdir -p logs`
  await $`echo '${timestamp} ${ip ?? 'ip.address'} (${country}) ${pathName}' >> logs/visit.log`
}

function getIp(req: Request, server: Server) {
  const headers = [
    'HTTP_X_FORWARDED_FOR',
    'HTTP_X_REAL_IP',
    'x-forwarded-for',
    'x-real-ip',
  ]
  const localIps = [null, '::ffff:127.0.0.1', '::1']
  const ips =
    headers.reduce((acc: null | string, header) => {
      if (!localIps.includes(acc)) {
        return acc
      }
      return req.headers.get(header)
    }, null) || server.requestIP(req)?.address
  if (!!ips) {
    return ips.split(', ')[0]
  }
  return undefined
}
