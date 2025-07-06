import {$} from 'bun'
import * as sass from 'sass'
import {readdir} from 'node:fs/promises'
import isProd from './src/back/pages/common/isProd.ts'
import {
  getAllModuleScssFiles,
  replaceModuleFileWithDecoratedContent,
} from './build-module.scss.ts'

const TEMP_DIR = 'temp/'

export default async function buildFront(entrypoints: string[]) {
  await $`cp src/front ${TEMP_DIR} -r`

  try {
    const isMatchingTsx = (name: string) => /\.tsx$/.test(name)
    const tsxFiles = (await readdir(TEMP_DIR, {recursive: true})).filter(
      isMatchingTsx
    )

    const allModuleScssFiles = await getAllModuleScssFiles()
    for (const moduleScssFile of allModuleScssFiles) {
      const filePath = `./${TEMP_DIR}/${moduleScssFile}`
      const escapedFilePath = filePath.replaceAll(
        /\.module\.scss/g,
        '_module.scss'
      )
      const css = await replaceModuleFileWithDecoratedContent(
        filePath,
        escapedFilePath
      )
      const compiledCss = await sass.compileStringAsync(css)
      await Bun.write(
        escapedFilePath.replace(/\.scss$/, '.css'),
        compiledCss.css
      )
      const hash = compiledCss.css.match(
        /^\/\*\s(\w+)\s\*\/\n/
      ) as RegExpExecArray
      await Bun.write(
        escapedFilePath.replace(/\.scss$/, '.js'),
        generateJS(hash[1])
      )
    }

    await Promise.all(
      tsxFiles.map(async (f) => {
        const tsxFile = Bun.file(`./${TEMP_DIR}${f}`)
        await Bun.write(
          tsxFile,
          (await tsxFile.text()).replace(
            /import (\w+) from (['"])([.\w\/\-_]+)\.module\.s?css\2/g,
            'import $2$3_module.css$2\nimport $1 from $2$3_module.js$2\n'
          )
        )
      })
    )

    const buildOutput = await Bun.build({
      entrypoints: entrypoints.map((e) => e.replace(/^front/, TEMP_DIR)),
      outdir: 'out/front',
      minify: isProd(),
      root: TEMP_DIR,
      target: 'browser',
      splitting: true,
    })
    if (!buildOutput.success) {
      console.error(buildOutput.logs)
    }
  } catch (e) {
    console.error(e)
    return 1
  }

  await $`rm -rf temp/`
}

function generateJS(hash: string) {
  return `export default function styles(className) {
    const hash = '_${hash}_'
    return hash + className
  }`
}
