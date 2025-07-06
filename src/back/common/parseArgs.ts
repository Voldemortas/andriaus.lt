type ParseArgsOptions =
  | {
      delimiter?: string
      isPlain?: false
    }
  | {
      isPlain: true
    }

export default function parseArgs(
  argName: string,
  options: ParseArgsOptions = {delimiter: '=', isPlain: false}
) {
  const regexPattern = !options.isPlain
    ? new RegExp(`${argName}${options.delimiter}(.+)`, 'g')
    : /(?:)/g
  for (let i = 0; i < Bun.argv.length; i++) {
    const arg = Bun.argv[i]
    if (options.isPlain && arg === `--${argName}`) {
      return argName
    }
    const matches = [...arg.matchAll(regexPattern)]
    if (!options.isPlain && matches.length > 0) {
      return matches[0][1]
    }
  }

  return undefined
}
