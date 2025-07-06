import type {Subprocess} from 'bun'
import {watch} from 'node:fs'
import build from './build'
import {getConfigVars} from './src/back/common/getConfigVar.ts'

//webstorm sucks, yet I can pass bun executable via props
//for this you probably want to use --BUN_INTERPRETER=$USER_HOME$/.bun/bin/bun
const CONFIG_VARS = getConfigVars({BUN_INTERPRETER: 'bun'})

let server: Subprocess | undefined = undefined
let isRebuilding = false

const watcher = watch(
  `${import.meta.dir}/src/`,
  {recursive: true},
  async (event, filename) => {
    if (server && !isRebuilding) {
      console.log(filename)
      isRebuilding = true
      server.kill()
      server = await runServer()
      isRebuilding = false
    }
  }
)

server = await runServer()

process.on('SIGTERM', () => {
  // close watcher when Ctrl-C is pressed
  server?.kill()
  watcher.close()
  process.exit(0)
})

async function runServer() {
  await build()
  return Bun.spawn([CONFIG_VARS.BUN_INTERPRETER, 'run', 'src/back/server.ts'], {
    stdout: 'inherit',
    env: {...getConfigVars(), PRODUCTION: 'false'},
  })
}
