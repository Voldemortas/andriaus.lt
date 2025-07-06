import getConfigVar from 'back/common/getConfigVar.ts'
import getBunEnv from 'back/common/getBunEnv.ts'

export default function isProd() {
  return (
    getBunEnv().NODE_ENV === 'production' ||
    getConfigVar('PRODUCTION') === 'true'
  )
}
