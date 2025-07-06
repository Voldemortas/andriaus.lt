import {$} from 'bun'
import getTimestamp from 'back/common/timestamp.ts'

export default async function deploy() {
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
  const pm2 = await $`bun run serve-pm2`.nothrow().quiet()
  if (pm2.exitCode !== 0) {
    await $`echo '${getTimestamp()} pm2: ${pm2.stderr.toString()}' >> logs/deploy.log`.nothrow().quiet()
    return pm2
  }
  await $`echo '${getTimestamp()} success: deployed!' >> logs/deploy.log`.nothrow().quiet()
  return pm2
}
