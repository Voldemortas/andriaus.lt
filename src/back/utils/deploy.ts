import {$} from 'bun'
import getTimestamp from 'back/common/timestamp.ts'

export default async function deploy() {
  const pull = await $`git pull`.nothrow().quiet()
  if (pull.stderr) {
    await $`echo '${getTimestamp()} pull: ${pull.stderr.toString()}' >> logs/deploy.log`.nothrow().quiet()
    return pull
  }
  const build = await $`bun run build-prod`.nothrow().quiet()
  if (pull.stderr) {
    await $`echo '${getTimestamp()} build: ${build.stderr.toString()}' >> logs/deploy.log`.nothrow().quiet()
    return build
  }
  const pm2 = await $`bun run serve-pm2`.nothrow().quiet()
  if (pm2.stderr) {
    await $`echo '${getTimestamp()} pm2: ${pm2.stderr.toString()}' >> logs/deploy.log`.nothrow().quiet()
    return pm2
  }
  await $`echo '${getTimestamp()} success: deployed!' >> logs/deploy.log`.nothrow().quiet()
  return pm2
}
