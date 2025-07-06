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
  if (pathName === '/installHook.js.map') {
    return
  }
  const timestamp = getTimestamp()
  let country = 'unknown'
  const ip = server.requestIP(req)?.address
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
