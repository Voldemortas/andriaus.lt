import parseArgs from './parseArgs.ts'
import getBunEnv from 'back/common/getBunEnv.ts'

export default function getConfigVar<T extends string | undefined>(
  name: string,
  defaultValue?: string | T
): string | T {
  return parseArgs(name) ?? getBunEnv()[name] ?? (defaultValue as T)
}

export function getConfigVars<T extends {[key: string]: string}>(defaults?: T) {
  const defaultVars = defaults ?? ({} as T)
  const pattern = /^--/
  const argvs = Bun.argv
    .filter((arg) => pattern.test(arg))
    .map((arg) => arg.split('=')[0].slice(2))
  const envs = Object.keys(defaultVars).concat(
    Object.keys(getBunEnv()).concat(argvs)
  )
  return envs.reduce((acc: {[key: string]: string | undefined}, cur) => {
    acc[cur] = getConfigVar(cur, defaultVars[cur])
    return acc
  }, {}) as {[key: string]: string | undefined} & T
}
