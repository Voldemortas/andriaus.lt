import {spyOn} from 'bun:test'

export default function mockModuleScss(path: string, prefix = '') {
  const styles = require(path)
  spyOn(styles, 'default').mockImplementation((style: string) => prefix + style)
}
