import getUrl from 'back/pages/common/getUrl'
import IndexBack from './back/pages/index/index'

const config: PageType<ReactType | RedirectType | BackType>[] = [
  {
    path: '/',
    resolve: {
      type: 'react',
      path: 'front/index/index.ts',
      resolver: IndexBack,
    },
    params: [],
  },
  {
    path: '/favicon.ico',
    resolve: {
      type: 'redirect',
      path: '/static/punkim.png',
    },
    params: [],
  },
  // {
  //   path: '/api/test',
  //   resolve: {
  //     type: 'back',
  //     resolver: ApiTest,
  //   },
  //   params: ['hello world!'],
  // },
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

export type PageType<T> = {
  path: string
  resolve: T
  params: string[]
}

export type ReactType = {
  type: 'react'
  path: string
  resolver: (request: Request, params: string[]) => Object
}

export type RedirectType = {
  type: 'redirect'
  path: string
}

export type BackType = {
  type: 'back'
  resolver: (request: Request, params: string[]) => Response
}

export default config
