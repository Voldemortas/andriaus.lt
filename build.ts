import {$} from 'bun'
import buildFront from './build-front'
import type {PageType, ReactType} from './src/pages'
import pages from './src/pages'
import buildBack from './build-back'
import buildGlobalScss from './build-global.scss.ts'

export default async function build() {
  await $`rm -rf out`
  await $`rm -rf temp`
  await $`mkdir out`
  await $`cp -r src/static/ out/static/`
  await $`cp src/back/pages/common/default.html out/`
  await $`cp src/back/pages/common/development.html out/`
  await buildGlobalScss()
  const frontPaths = (pages as PageType<ReactType>[])
    .filter((p) => p.resolve.type === 'react')
    .map((p) => p.resolve.path)
  await buildFront(frontPaths)
  await buildBack()
}

await build()
