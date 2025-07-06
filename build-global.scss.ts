import * as sass from 'sass'

const OUT_DIR = 'out/static/'
const SRC_DIR = 'src/static/'
const SCSS_FILE = 'global.scss'

export default async function buildGlobalScss() {
  const scss = await Bun.file(`${SRC_DIR}${SCSS_FILE}`).text()
  const compiledCss = await sass.compileStringAsync(scss, {
    style: 'expanded',
    loadPaths: ['./src/static'],
  })
  await Bun.write(`${OUT_DIR}global.css`, compiledCss.css)
}