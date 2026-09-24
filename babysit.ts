import babysit, {type Config} from "@voldemortas/babysit";

const config: Config = {
  command: ['bun', 'run', 'out/server.js'],
  workDir: import.meta.dir,
  env: {
    NODE_ENV: 'production'
  }
}

babysit(config)
