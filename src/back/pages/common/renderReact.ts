import {htmlHeaders} from 'back/common/responseHeaders.ts'
import {getPage, type PageType, type ReactType} from 'src/pages.ts'
import isProd from './isProd.ts'
import defaultHtml from './default.html'
import developmentHtml from './development.html'

export default async function renderReact(request: Request, hash: string) {
  const htmlFile = await Bun.file(
    (defaultHtml.index ?? defaultHtml).replaceAll(/^\./g, import.meta.dir)
  ).text()

  const page = getPage(request, 'react') as PageType<ReactType>
  const path = page.resolve.path.replace(/\.ts$/, '')

  const newHtmlFile = htmlFile
    .replace(
      '<script id="dev"></script>',
      isProd()
        ? ''
        : await Bun.file(
            (developmentHtml.index ?? developmentHtml).replaceAll(
              /^\./g,
              import.meta.dir
            )
          ).text()
    )
    .replace('const hash = undefined', isProd() ? '' : `const hash = '${hash}'`)
    .replaceAll(
      'const globalParams = undefined',
      `    const globalParams = ${JSON.stringify(page.resolve.resolver(request, page.params))}`
    )
    .replaceAll(/global.css/g, `global.css?hash=${hash}`)
    .replaceAll(/placeholderPath.css/g, `${path}.css?hash=${hash}`)
    .replaceAll(/placeholderPath.js/g, `${path}.js?hash=${hash}`)
    .replaceAll('<html>', `<html lang="en">`)

  return new Response(newHtmlFile, htmlHeaders)
}
