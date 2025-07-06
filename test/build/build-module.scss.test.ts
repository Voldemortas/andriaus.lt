import {afterEach, describe, expect, it} from 'bun:test'
import {$} from 'bun'
import {
  decorateModuleWithPrefix,
  getAllModuleScssFiles,
  replaceModuleFileWithDecoratedContent,
} from 'src/../build-module.scss.ts'

const SCSS = 'p { color: red; }'
const TESTING_MODULE = 'testing.module.scss'
const NEW_MODULE = 'new.module.scss'
const EXPECTED_MODULE = 'expected.module.scss'

describe('build-module.scss', () => {
  describe('getAllModuleScssFiles', () => {
    it('gets all module scss files', async () => {
      const result = await getAllModuleScssFiles(import.meta.dir)
      expect(result.toSorted()).toEqual(
        [TESTING_MODULE, EXPECTED_MODULE].toSorted()
      )
    })
  })
  describe('decorateModuleWithPrefix', () => {
    it('works correctly with tag', async () => {
      const result = await decorateModuleWithPrefix({moduleContent: SCSS})
      expect(result.replaceAll(/\s+/g, '')).toBe(
        `@use "sass:string";
        $uniqueId: string.unique-id();
        /* #{$uniqueId} */
        ._#{$uniqueId} {
          ${SCSS}
        }
      `.replaceAll(/\s+/g, '')
      )
    })
    it('works correctly with class', async () => {
      const result = await decorateModuleWithPrefix({moduleContent: `.${SCSS}`})
      expect(result.replaceAll(/\s+/g, '')).toBe(
        `@use "sass:string";
        $uniqueId: string.unique-id();
        /* #{$uniqueId} */
        ._#{$uniqueId} {
          &_${SCSS}
        }
      `.replaceAll(/\s+/g, '')
      )
    })
    it('works correctly with media', async () => {
      const result = await decorateModuleWithPrefix({
        moduleContent: `@media (width <= 800px) {.${SCSS}}`,
      })
      expect(result.replaceAll(/\s+/g, '')).toBe(
        `@use "sass:string";
        $uniqueId: string.unique-id();
        /* #{$uniqueId} */
        ._#{$uniqueId} {
          @media (width <= 800px) {&_${SCSS}}
        }
      `.replaceAll(/\s+/g, '')
      )
    })
  })
  describe('replaceModuleFileWithDecoratedContent', () => {
    const filePath = `${import.meta.dir}/${TESTING_MODULE}`
    const newFilePath = `${import.meta.dir}/${NEW_MODULE}`
    const expectedFilePath = `${import.meta.dir}/${EXPECTED_MODULE}`

    afterEach(async () => {
      try {
        await $`rm ${newFilePath}`
      } catch {}
    })

    it('correctly updates module.scss file', async () => {
      await replaceModuleFileWithDecoratedContent(filePath, newFilePath)
      const expectedScss = (await Bun.file(expectedFilePath).text())
        .replaceAll(/\s+/g, '')
        .replaceAll(`'sass:string'`, `"sass:string"`)
      const newScss = (await Bun.file(newFilePath).text()).replaceAll(
        /\s+/g,
        ''
      )
      expect(expectedScss).toBe(newScss)
    })
  })
})
