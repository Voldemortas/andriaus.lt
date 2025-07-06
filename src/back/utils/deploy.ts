import {$} from 'bun'
import getTimestamp from 'back/common/timestamp.ts'

export default async function deploy() {
  await $`echo '${getTimestamp()} Trying to redeploy!' >> logs/deploy.log`.nothrow().quiet()
  const pull = await $`git pull`.nothrow().quiet()
  if (pull.exitCode !== 0) {
    await $`echo '${getTimestamp()} pull: ${pull.stderr.toString()}' >> logs/deploy.log`.nothrow().quiet()
    return pull
  }
  const install = await $`bun install`.nothrow().quiet()
  if (install.exitCode !== 0) {
    await $`echo '${getTimestamp()} install: ${install.stderr.toString()}' >> logs/deploy.log`.nothrow().quiet()
    return pull
  }
  const build = await $`bun run build-prod`.nothrow().quiet()
  if (pull.exitCode !== 0) {
    await $`echo '${getTimestamp()} build: ${build.stderr.toString()}' >> logs/deploy.log`.nothrow().quiet()
    return build
  }
  await $`echo '${getTimestamp()} Restarting pm2' >> logs/deploy.log`.nothrow().quiet()
  return await $`bun run serve-pm2`.nothrow().quiet()
}
