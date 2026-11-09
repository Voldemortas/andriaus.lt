import {$} from 'bun'
import generateHTML from 'src/cv/index.tsx'

const CV_DIR = `${import.meta.dir}/src/cv`
const STATIC_DIR = `${import.meta.dir}/src/static`

export default async function cv() {
  await $`rm ${CV_DIR}/en.html`.quiet().nothrow()
  await $`rm ${CV_DIR}/lt.html`.quiet().nothrow()
  await $`rm ${CV_DIR}/en.pdf`.quiet().nothrow()
  await $`rm ${CV_DIR}/lt.pdf`.quiet().nothrow()
  await Bun.file(`${CV_DIR}/en.html`).write(generateHTML('en'))
  await Bun.file(`${CV_DIR}/lt.html`).write(generateHTML('lt'))
  await $`page="file://${CV_DIR}/en.html"

chromium \
  --headless \
  --print-to-pdf=${STATIC_DIR}/en.pdf \
  --disable-print-preview \
  --no-sandbox \
  "$page"`.catch((e) => {
    console.error(e)
    console.log(`Run \x1b[1;33msudo apt install chromium\x1b[0m to install it`)
    process.exit(1)
  })

  await $`page="file://${CV_DIR}/lt.html"

chromium \
  --headless \
  --print-to-pdf=${STATIC_DIR}/lt.pdf \
  --disable-print-preview \
  --no-sandbox \
  "$page"`
}


await cv()
