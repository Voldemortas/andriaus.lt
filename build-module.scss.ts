import * as sass from 'sass'
import {readdir} from 'node:fs/promises'

const TEMP_DIR = 'temp/'

export async function getAllModuleScssFiles(rootDit = TEMP_DIR) {
  return (await readdir(rootDit, {recursive: true})).filter((fileName) =>
    fileName.endsWith('.module.scss')
  )
}

export async function decorateModuleWithPrefix({
  moduleContent,
  moduleFileName,
  style,
}: {
  moduleContent?: string
  moduleFileName?: string
  style?: sass.OutputStyle | undefined
}) {
  const regex = /(^(\.))|((^@media \([\s\w>=<\d]+\)\s{\n\s+)\.)/gm
  let compileResult: string
  if (moduleFileName) {
    compileResult = (
      await sass.compileAsync(moduleFileName, {
        style: 'expanded',
      })
    ).css
  } else if (moduleContent) {
    compileResult = (
      await sass.compileStringAsync(moduleContent, {
        style,
      })
    ).css
  } else {
    throw new Error('missing')
  }
  const changedClassesToChildren = compileResult.replaceAll(regex, '$4&_')
  return `@use "sass:string";
$uniqueId: string.unique-id();
  /* #{$uniqueId} */

  ._#{$uniqueId} {
    ${changedClassesToChildren}
  }`
}

export async function replaceModuleFileWithDecoratedContent(
  filePath: string,
  newFilePath?: string
) {
  const decoratedContent = await decorateModuleWithPrefix({
    moduleFileName: filePath,
  })
  await Bun.write(newFilePath ?? filePath, decoratedContent)
  return decoratedContent
}
