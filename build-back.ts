import isProd from './src/back/pages/common/isProd.ts'

export default async function buildBack() {
  const buildOutput = await Bun.build({
    entrypoints: ['src/back/server.ts'],
    outdir: 'out',
    root: 'src/back',
    target: 'bun',
    minify: isProd(),
    external: ['*.html'],
    env: 'inline',
  })
  if (!buildOutput.success) {
    console.error(buildOutput.logs)
  }
}
