import getUrl from 'back/pages/common/getUrl'
import deployPage from 'back/pages/deployPage.ts'
import emptyResolver from 'back/common/emptyResolver.ts'

const config: PageType<ReactType | RedirectType | BackType>[] = [
  {
    path: '/',
    resolve: {
      type: 'react',
      path: 'front/index/index.ts',
      resolver: emptyResolver,
    },
    params: [],
  },
  {
    path: '/favicon.ico',
    resolve: {
      type: 'redirect',
      path: '/static/favicon.png',
    },
    params: [],
  },
  {
    path: '/deploy',
    resolve: {
      type: 'back',
      resolver: deployPage,
    },
    params: [],
  },
]

export function getPage(
  request: Request,
  resolveType: 'react' | 'redirect' | 'back',
  conf = config
) {
  const {pathname} = getUrl(request)
  return conf.filter(
    ({path, resolve}) => path === pathname && resolve.type === resolveType
  )[0]
}

type OptionalPromise<T> = T | Promise<T>

export type PageType<T> = {
  path: string
  resolve: T
  params: string[]
}

export type ReactType = {
  type: 'react'
  path: string
  resolver: (request: Request, params: string[]) => OptionalPromise<Object>
}

export type RedirectType = {
  type: 'redirect'
  path: string
}

export type BackType = {
  type: 'back'
  resolver: (request: Request, params: string[]) => OptionalPromise<Response>
}

export default config
